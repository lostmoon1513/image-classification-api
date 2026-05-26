
# 🖼️ VisionAI — AI Image Classification Platform

An advanced full-stack AI-powered image classification platform built using modern web technologies and Hugging Face vision transformers.

The application allows users to upload images through a beautiful React frontend and receive real-time AI predictions powered by pretrained deep learning models.

---

# 🚀 Live Demo

## 🌐 Frontend (Vercel)

```text
https://image-classification-api-psi.vercel.app/
```

## ⚡ Backend API (Hugging Face Spaces)

```text
https://shruthipallemoni-image-classification-api.space
```

---

# 📌 Features

- AI-powered image classification
- Real-time predictions
- Confidence score visualization
- Modern responsive UI
- FastAPI backend architecture
- Hugging Face model integration
- React + Vite frontend
- Vanilla CSS styling
- Framer Motion animations
- REST API communication
- Cloud deployment ready
- Modular scalable architecture

---

# 🧠 AI Models

The platform uses pretrained transformer-based vision models from Hugging Face.

## Default Model

| Property | Value |
|---|---|
| Model | `google/vit-base-patch16-224` |
| Architecture | Vision Transformer (ViT) |
| Dataset | ImageNet |
| Categories | 1000+ |

---

# 🏗️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | Frontend framework |
| Vite | Fast build tool |
| Vanilla CSS | Styling |
| Axios | API requests |
| Framer Motion | Animations |
| React Icons | UI icons |

---

## Backend

| Technology | Purpose |
|---|---|
| FastAPI | Backend framework |
| Uvicorn | ASGI server |
| Python | Backend language |
| Requests | API communication |
| python-dotenv | Environment handling |

---

## AI & Deployment

| Technology | Purpose |
|---|---|
| Hugging Face | AI inference |
| Vercel | Frontend deployment |
| Hugging Face Spaces | Backend deployment |
| GitHub | Version control |

---

# 📂 Project Structure

```text
project-root/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── screenshots/
├── .gitignore
├── LICENSE
└── README.md
```

---

# 🔁 Application Workflow

```text
User Uploads Image
        ↓
React Frontend Sends Request
        ↓
FastAPI Backend Receives Image
        ↓
Backend Calls Hugging Face Model
        ↓
Model Returns Predictions
        ↓
Frontend Displays Results
```

---

# ⚙️ Installation & Setup

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/lostmoon1513/image-classification-api

cd your-repository
```

---

# 2️⃣ Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 3️⃣ Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Create virtual environment:

## Windows

```bash
python -m venv venv

venv\Scripts\activate
```

## Linux / Mac

```bash
python3 -m venv venv

source venv/bin/activate
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

# 🚀 Running Backend

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

# 📡 API Reference

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
    {
      "label": "Egyptian cat",
      "score": 0.97
    },
    {
      "label": "tabby cat",
      "score": 0.02
    }
  ]
}
```

---

# ☁️ Deployment

---

# 🌐 Frontend Deployment — Vercel

## Build Command

```bash
npm run build
```

## Output Directory

```text
dist
```

## Framework Preset

```text
Vite
```

---

# ⚡ Backend Deployment — Hugging Face Spaces

## Start Command

```bash
uvicorn app.main:app --host 0.0.0.0 --port 7860
```

---

# 🔄 GitHub Workflow

## Create Feature Branch

```bash
git checkout -b feature/frontend-ui
```

## Commit Changes

```bash
git add .

git commit -m "Updated frontend UI"
```

## Push Changes

```bash
git push origin feature/frontend-ui
```

## Create Pull Request

```text
feature/frontend-ui → main
```

---

# 📄 .gitignore

```gitignore
node_modules/
dist/
.env
venv/
__pycache__/
```

---

# 📈 Future Improvements

- Multiple AI model selection
- Authentication system
- Prediction history
- User dashboard
- Docker support
- CI/CD pipelines
- Batch predictions

---

# 📚 Learning Outcomes

This project demonstrates:

- React frontend engineering
- FastAPI backend development
- REST API communication
- Hugging Face inference APIs
- Frontend-backend integration
- AI-powered web applications
- Modern deployment workflows
- Production-ready architecture

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
- React
- Vite
- Vanilla CSS
- Vercel
- Open Source Community
````
