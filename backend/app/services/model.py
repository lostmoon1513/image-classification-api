"""
model.py — Local inference using transformers (no API calls needed)
Model downloads once (~25MB on first run), then cached locally forever.
No HF_API_TOKEN required.
"""

from transformers import pipeline
from PIL import Image
from typing import List, Dict

# Lightweight model — 25MB vs 346MB for ViT
# Same 1000 ImageNet categories, works on free deployment tier
MODEL_ID = "google/mobilenet_v2_1.0_224"

# Load model once when server starts (not on every request)
classifier = pipeline("image-classification", model=MODEL_ID)


def run_inference(image: Image.Image) -> List[Dict]:
    """
    Runs classification locally and returns:
    [{"label": "Golden Retriever", "confidence": 97.3}, ...]
    """
    results = classifier(image)

    predictions = []
    for item in results:
        label = _clean_label(item.get("label", "Unknown"))
        confidence = round(item.get("score", 0) * 100, 2)
        predictions.append({"label": label, "confidence": confidence})

    return predictions


def _clean_label(raw: str) -> str:
    """'n02099601 golden retriever' → 'Golden Retriever'"""
    parts = raw.strip().split(" ", 1)
    label = parts[1] if len(parts) == 2 and parts[0].startswith("n") else raw
    return label.replace("_", " ").title()