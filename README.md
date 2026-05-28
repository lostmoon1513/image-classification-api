# 🖼️ VisionAI — AI Image Classification Platform

An advanced full-stack AI-powered image classification platform built using modern web technologies, FastAPI, React, Hugging Face Vision Transformers, and Cloudinary.

VisionAI allows users to upload images through a modern React frontend, securely store them on Cloudinary, and receive real-time AI-powered image classification predictions using pretrained deep learning models.

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

* AI-powered image classification
* Real-time predictions
* Confidence score visualization
* Modern responsive UI
* FastAPI backend architecture
* Hugging Face Vision Transformer integration
* React + Vite frontend
* Framer Motion animations
* REST API communication
* Cloudinary cloud image storage
* CDN optimized image delivery
* Scalable cloud architecture
* Production-ready deployment workflow
* Modular full-stack structure

---

# ☁️ Cloudinary Integration

The application now uses **Cloudinary** for cloud-based image storage and delivery.

Instead of directly sending image files to the backend:

1. The frontend uploads the image to Cloudinary
2. Cloudinary stores the image securely
3. Cloudinary returns a secure image URL
4. The frontend sends the image URL to the FastAPI backend
5. The backend downloads the image from the URL and performs AI inference

---

# 🔄 Application Workflow

```text
User Uploads Image
        ↓
React Frontend
        ↓
Upload Image to Cloudinary
        ↓
Cloudinary Stores Image
        ↓
Returns Secure Image URL
        ↓
Frontend Sends URL to FastAPI
        ↓
Backend Downloads Image
        ↓
Hugging Face Vision Model
        ↓
Prediction Results
        ↓
Frontend Displays Results
```

---

# 🌟 Benefits of Cloudinary Architecture

| Feature                   | Benefit                                |
| ------------------------- | -------------------------------------- |
| Cloud Storage             | No local image storage needed          |
| CDN Delivery              | Faster image loading worldwide         |
| Scalability               | Efficient handling of large uploads    |
| Reduced Backend Load      | Backend receives URLs instead of files |
| Better Deployment Support | Ideal for serverless deployment        |
| Secure Image Hosting      | Cloudinary-managed image security      |

---

# 🧠 AI Models

The platform uses pretrained transformer-based vision models from Hugging Face.

## Default Model

| Property     | Value                         |
| ------------ | ----------------------------- |
| Model        | `google/vit-base-patch16-224` |
| Architecture | Vision Transformer (ViT)      |
| Dataset      | ImageNet                      |
| Categories   | 1000+                         |

---

# 🏗️ Tech Stack

## Frontend

| Technology     | Purpose             |
| -------------- | ------------------- |
| React          | Frontend framework  |
| Vite           | Build tool          |
| Axios          | API requests        |
| Framer Motion  | Animations          |
| React Icons    | UI components       |
| Vanilla CSS    | Styling             |
| Cloudinary API | Cloud image uploads |

---

## Backend

| Technology    | Purpose               |
| ------------- | --------------------- |
| FastAPI       | Backend framework     |
| Python        | Backend language      |
| Uvicorn       | ASGI server           |
| Requests      | Download cloud images |
| python-dotenv | Environment variables |

---

## AI & Deployment

| Technology          | Purpose             |
| ------------------- | ------------------- |
| Hugging Face        | AI inference        |
| Cloudinary          | Cloud image storage |
| Vercel              | Frontend hosting    |
| Hugging Face Spaces | Backend deployment  |
| GitHub              | Version control     |

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
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── screenshots/
├── .gitignore
├── LICENSE
└── README.md
```

---

# ⚙️ Installation & Setup

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/lostmoon1513/image-classification-api.git

cd image-classification-api
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

---

# 🔐 Frontend Environment Variables

Create a `.env` file inside the frontend folder.

```env
VITE_BACKEND_URL=http://127.0.0.1:8000/predict

VITE_CLOUDINARY_CLOUD=your_cloudinary_cloud_name

VITE_CLOUDINARY_PRESET=your_upload_preset
```

---

# ▶️ Run Frontend

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

# 🔐 Backend Environment Variables

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

Receives a Cloudinary image URL and returns AI prediction results.

---

## Request

| Property     | Value                |
| ------------ | -------------------- |
| Method       | POST                 |
| Content-Type | application/json     |
| Input        | Cloudinary Image URL |

---

## Sample Request

```json
{
  "image_url": "https://res.cloudinary.com/demo/image/upload/sample.jpg"
}
```

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

# 🧩 Frontend Upload Logic

The frontend:

1. Accepts image upload
2. Uploads image to Cloudinary
3. Receives secure image URL
4. Sends image URL to backend API
5. Displays prediction results

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
git checkout -b feature/cloudinary-integration
```

## Commit Changes

```bash
git add .

git commit -m "Added Cloudinary image upload workflow"
```

## Push Changes

```bash
git push origin feature/cloudinary-integration
```

## Create Pull Request

```text
feature/cloudinary-integration → main
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

* Multiple AI model selection
* Authentication system
* User dashboard
* Prediction history
* Docker support
* Batch image classification
* CI/CD pipelines
* Signed Cloudinary uploads
* Automatic image cleanup
* AI-generated captions

---

# 📚 Learning Outcomes

This project demonstrates:

* React frontend engineering
* FastAPI backend development
* REST API communication
* Hugging Face inference APIs
* Cloudinary integration
* Frontend-backend architecture
* AI-powered web applications
* Cloud-based media handling
* Modern deployment workflows
* Production-ready scalable architecture

---

# 🤝 Contributors

* Pradeep
* Shruthi

---

# 📄 License

Licensed under the MIT License.

---

# 🙏 Acknowledgements

* Hugging Face
* Cloudinary
* FastAPI
* React
* Vite
* Vercel
* Hugging Face Spaces
* Open Source Community
