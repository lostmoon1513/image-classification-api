
# 🖼️ VisionAI — Image Classification Backend

A **FastAPI** backend that classifies images using a pretrained **Vision Transformer (ViT)** model from Hugging Face.

No custom model training required. Upload any image URL and get real-time AI predictions.

---

## 🚀 Live API

| Endpoint | Description |
|---|---|
| `GET /` | Health check |
| `POST /predict` | Classify an image from URL |
| `GET /docs` | Swagger UI |

---

## 🧠 Model

| Property | Value |
|---|---|
| Model | `google/vit-base-patch16-224` |
| Architecture | Vision Transformer (ViT) |
| Dataset | ImageNet |
| Categories | 1000+ |
| Runs | Locally (no API calls) |

---

## 📡 API Usage

### POST `/predict`

**Request:**
```json
{
  "image_url": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "top_prediction": "Golden Retriever",
  "confidence": 97.3,
  "predictions": [
    { "label": "Golden Retriever", "confidence": 97.3 },
    { "label": "Labrador Retriever", "confidence": 1.8 }
  ]
}
```

---

## 📂 Project Structure

```
backend/
├── app/
│   ├── main.py                  ← FastAPI app, routes, schemas
│   └── services/
│       └── model.py             ← ViT model, local inference
├── Dockerfile                   ← HF Spaces deployment
├── requirements.txt             ← dependencies
└── README.md
```

---

## ⚙️ Tech Stack

| Technology | Purpose |
|---|---|
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| Transformers | ViT model inference |
| PyTorch | Model backend |
| Pillow | Image processing |
| Pydantic | Request/response validation |
