# 🖼️ AI Image Classification Platform

A full-stack AI-powered image classification platform built using **FastAPI**, **Streamlit**, and **Hugging Face Vision Models**.

Users can upload images through an interactive frontend and receive real-time classification predictions powered by state-of-the-art pretrained transformer models — without training any custom ML models.

---

# 📌 Overview

This project demonstrates how modern AI systems can be integrated into scalable web applications using production-ready tools and cloud deployment platforms.

The system consists of:

- **FastAPI Backend**
  - Handles image uploads
  - Communicates with Hugging Face APIs
  - Returns structured prediction responses

- **Streamlit Frontend**
  - User-friendly image upload interface
  - Displays predictions and confidence scores

- **Hugging Face Models**
  - Pretrained image classification models
  - No model training required

- **Cloud Deployment**
  - Frontend deployed on Streamlit Community Cloud / Render
  - Backend deployed on Render / Railway

---

# 🔁 Project Flow

The following describes how a request moves through the system from the user's browser to the model and back:

```text
User opens Streamlit UI
        ↓
User uploads an image through the interface
        ↓
Streamlit sends the image to the FastAPI backend
        ↓
FastAPI passes the image to the Hugging Face ViT model
        ↓
Model runs inference and returns ranked predictions
        ↓
FastAPI responds with a structured JSON result
        ↓
Streamlit displays the predicted label and confidence score to the user
```

---

# 🏗️ System Architecture

```text
┌────────────────────┐
│   User Uploads     │
│      Image         │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Streamlit Frontend │
│  (Streamlit Cloud) │
└─────────┬──────────┘
          │ HTTP Request
          ▼
┌────────────────────┐
│   FastAPI Backend  │
│ (Render/Railway)   │
└─────────┬──────────┘
          │ API Request
          ▼
┌────────────────────┐
│ Hugging Face Model │
│   Inference API    │
└─────────┬──────────┘
          │ Prediction
          ▼
┌────────────────────┐
│  JSON Response     │
└────────────────────┘
```

---

# ✨ Features

## Core Features

- Upload image files
- Real-time AI predictions
- Confidence score display
- REST API backend
- Interactive frontend UI
- Fast inference using Hugging Face APIs
- Pretrained transformer-based vision models
- No custom model training required

---

## Engineering Features

- Clean project architecture
- Environment variable support
- Cloud deployment ready
- GitHub collaboration workflow
- Modular backend services
- Easy model replacement
- Production-friendly structure
- Swagger API documentation
- Extensible backend architecture

---

# 🧠 AI Models

The application uses pretrained image classification models from Hugging Face.

---

## Default Model

| Property | Value |
|---|---|
| Model | `google/vit-base-patch16-224` |
| Architecture | Vision Transformer (ViT) |
| Dataset | ImageNet |
| Categories | 1000+ |

---

## Alternative Models

| Model | Use Case |
|---|---|
| `microsoft/resnet-50` | Faster inference |
| `facebook/convnext-base-224` | Higher accuracy |
| `google/mobilenet_v2_1.0_224` | Lightweight/mobile |
| `Falconsai/nsfw_image_detection` | Content moderation |

---

# 📂 Project Structure

```text
image-classification-platform/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   ├── services/
│   │   │   └── huggingface_service.py
│   │   └── utils/
│   │
│   ├── requirements.txt
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
│
├── screenshots/
│
├── .gitignore
├── LICENSE
└── README.md
```

---

# 📘 Component Responsibilities

| Component | File | Role |
|---|---|---|
| Frontend | `frontend/app.py` | Streamlit UI — image upload and prediction display |
| Backend | `backend/app/main.py` | FastAPI server — request handling and API routing |
| Service Layer | `backend/app/services/huggingface_service.py` | Hugging Face inference communication |
| Model | Hugging Face ViT | Image classification |

---

# ⚙️ Installation & Setup

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/image-classification-platform.git

cd image-classification-platform
```

---

# 2️⃣ Backend Setup (FastAPI)

Navigate to backend:

```bash
cd backend
```

---

## Create Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# 3️⃣ Frontend Setup (Streamlit)

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
HF_TOKEN=your_huggingface_api_token
```

---

# 🔑 Getting Hugging Face API Token

1. Create account on Hugging Face
2. Navigate to Settings → Access Tokens
3. Generate a new token
4. Copy token into `.env`

Hugging Face Tokens:
https://huggingface.co/settings/tokens

---

# 🚀 Running the Backend

Navigate to backend folder.

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

# 🎨 Running the Frontend

Navigate to frontend folder.

```bash
streamlit run app.py
```

Frontend URL:

```text
http://localhost:8501
```

---

# 📡 API Reference

---

# POST `/predict`

Uploads an image and returns prediction results.

---

## Request

| Property | Value |
|---|---|
| Method | POST |
| Content-Type | multipart/form-data |
| Input | JPEG / PNG image |

---

## Sample Response

```json
{
  "prediction": [
    { "label": "Egyptian cat", "score": 0.97 },
    { "label": "tabby, tabby cat", "score": 0.02 }
  ]
}
```

---

# 📘 Understanding the Response

The API returns a ranked list of predictions, not just a single answer. Each item in the `prediction` array represents one possible classification and contains two fields:

| Field | Type | Description |
|---|---|---|
| `label` | string | The predicted category name |
| `score` | float | Confidence level between 0.0 and 1.0 (higher is better) |

Results are ordered from highest to lowest confidence — the **first item is always the model's top prediction**.

The scores represent a probability distribution across the returned labels, reflecting how likely each category is relative to the others.

For example, in the sample response above:

- The model is **97% confident** the image contains an Egyptian cat
- It assigns only **2% probability** to the next best guess (tabby cat)

If your application only needs the single best result, simply read the first item in the list and discard the rest.

---

# 🛠️ Backend Technologies

| Technology | Purpose |
|---|---|
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| Requests | HTTP communication |
| python-dotenv | Environment variables |
| python-multipart | File upload handling |

---

# 🎨 Frontend Technologies

| Technology | Purpose |
|---|---|
| Streamlit | Web frontend |
| Requests | Backend communication |

---

# ☁️ Deployment

---

# Backend Deployment

## Render

Website:
https://render.com

### Build Command

```bash
pip install -r requirements.txt
```

### Start Command

```bash
uvicorn app.main:app --host 0.0.0.0 --port 10000
```

Add environment variable:

```env
HF_TOKEN=your_token
```

---

## Railway

Website:
https://railway.app

### Steps

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

---

# Frontend Deployment

## Streamlit Community Cloud

Website:
https://share.streamlit.io

### Steps

1. Push frontend to GitHub
2. Connect repository to Streamlit Cloud
3. Select `frontend/app.py`
4. Deploy application

---

# 🔄 GitHub Collaboration Workflow

---

# Branch Strategy

| Branch | Purpose |
|---|---|
| main | Stable production |
| dev | Integration branch |
| feature/frontend | Frontend development |
| feature/backend | Backend development |

---

# Daily Workflow

## Pull Latest Code

```bash
git pull origin dev
```

---

## Create Feature Branch

```bash
git checkout -b feature/frontend
```

---

## Commit Changes

```bash
git add .

git commit -m "Added frontend image upload"
```

---

## Push Changes

```bash
git push origin feature/frontend
```

---

## Create Pull Request

```text
feature/frontend → dev
```

---

# 📌 Important Git Rules

- Never push directly to `main`
- Pull before starting work
- Use meaningful commit messages
- Keep `.env` secret
- Use separate feature branches
- Review code before merging

---

# 📄 .gitignore

```gitignore
venv/
__pycache__/
.env
*.pyc
.DS_Store
```

---

# 📚 Useful Links

## FastAPI
https://fastapi.tiangolo.com

---

## Streamlit
https://streamlit.io

---

## Hugging Face
https://huggingface.co

---

## Hugging Face Models
https://huggingface.co/models

---

## Render
https://render.com

---

## Railway
https://railway.app

---

## GitHub
https://github.com

---

# 📈 Future Improvements

- Drag-and-drop image upload
- Multiple model selection
- Authentication system
- Prediction history
- Database integration
- Docker support
- CI/CD pipelines
- Batch image predictions
- Rate limiting
- User dashboards

---

# 📚 Learning Outcomes

This project helps understand:

- FastAPI development
- Streamlit frontend engineering
- REST APIs
- Hugging Face inference APIs
- Frontend-backend communication
- Environment variables
- Cloud deployment
- GitHub collaboration workflow
- AI-powered application architecture

---

# 🤝 Contributors

- Pradeep
- Shruthi

---

# 📄 License

Licensed under the MIT License.

---

# 🙏 Acknowledgements

- Hugging Face
- FastAPI
- Streamlit
- Render
- Railway
- Streamlit Community Cloud

---
