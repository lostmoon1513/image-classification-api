import io
import logging
from typing import List

import requests
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from pydantic import BaseModel

from app.services.model import run_inference

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="VisionAI Backend",
    description="Image classification using local MobileNet v2 model",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- Schemas ----------

class PredictRequest(BaseModel):
    image_url: str


class PredictionItem(BaseModel):
    label: str
    confidence: float


class PredictResponse(BaseModel):
    top_prediction: str
    confidence: float
    predictions: List[PredictionItem]


# ---------- Routes ----------

@app.get("/")
def root():
    return {"status": "ok", "message": "VisionAI backend is running."}


@app.post("/predict", response_model=PredictResponse)
def predict(payload: PredictRequest):
    # 1. Download image from URL
    try:
        response = requests.get(payload.image_url, timeout=15)
        response.raise_for_status()
    except requests.exceptions.Timeout:
        raise HTTPException(status_code=504, detail="Timed out fetching image from URL.")
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=400, detail=f"Failed to download image: {str(e)}")

    # 2. Decode image
    try:
        image = Image.open(io.BytesIO(response.content)).convert("RGB")
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"Could not decode image: {str(e)}")

    # 3. Run local inference (no API call)
    try:
        raw_predictions = run_inference(image)
    except Exception as e:
        logger.exception("Inference failed")
        raise HTTPException(status_code=500, detail=f"Inference failed: {str(e)}")

    if not raw_predictions:
        raise HTTPException(status_code=500, detail="No predictions returned.")

    # 4. Format response
    top = raw_predictions[0]
    return PredictResponse(
        top_prediction=top["label"],
        confidence=round(top["confidence"], 2),
        predictions=[
            PredictionItem(label=p["label"], confidence=round(p["confidence"], 2))
            for p in raw_predictions
        ],
    )