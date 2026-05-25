FROM python:3.10-slim

WORKDIR /app

# Install dependencies first (cached layer)
COPY requirements.txt .
RUN pip install -r requirements.txt

# Download and cache ViT model during build
# This avoids downloading on every restart
RUN python -c "from transformers import pipeline; pipeline('image-classification', model='google/vit-base-patch16-224')"

# Copy rest of the code
COPY . .

# HF Spaces requires port 7860
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7860"]
