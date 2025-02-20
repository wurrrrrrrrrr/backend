from flask import Blueprint, request, jsonify
from models.glaucoma_models import Glaucoma
from models import db
import torch
import torch.nn as nn
from torchvision import transforms, models
from PIL import Image
import os
from werkzeug.utils import secure_filename


# 📂 上傳檔案路徑
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    """檢查檔案副檔名是否允許"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def create_face_recognition_module(app):
    PATH = r"/home/wu/PYTHON-FLASK/resnet50_weights.pth"
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    # ✅ 檢查權重檔是否存在
    if not os.path.exists(PATH):
        raise FileNotFoundError(f"⚠️ 找不到模型權重檔案：{PATH}")

    # 🧬 載入已訓練好的 PyTorch 模型
    model = models.resnet50(weights=None)
    num_features = model.fc.in_features
    model.fc = nn.Sequential(
        nn.Linear(num_features, 512),
        nn.ReLU(),
        nn.Dropout(0.5),
        nn.Linear(512, 2)
    )

    model.load_state_dict(torch.load(PATH, map_location=device))
    model.to(device)
    model.eval()
    print("✅ 模型已成功載入")

    # 🎛️ 模型對應的類別
    class_names = ['have_glaucoma', 'not_have_glaucoma']

    # 🔍 圖片預處理函式
    transform = transforms.Compose([
        transforms.Resize((512, 512)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
    ])

    def preprocess_image(img_path):
        try:
            img = Image.open(img_path).convert('RGB')
            img = transform(img)
            img = img.unsqueeze(0).to(device)  # 支援 GPU
            return img
        except Exception as e:
            raise ValueError(f"🖼️ 圖片預處理失敗: {str(e)}")

    # 🔥 API：執行青光眼辨識
    @app.route('/predict_face', methods=['POST'])
    def predict_face():
        if 'image' not in request.files or request.files['image'].filename == '':
            return jsonify({"error": "請上傳有效的圖片檔案"}), 400

        file = request.files['image']
        if not allowed_file(file.filename):
            return jsonify({"error": "不支援的檔案格式，請上傳 png、jpg 或 jpeg 檔案"}), 400

        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)

        try:
            # 🖼️ 預處理上傳的圖片
            img = preprocess_image(file_path)

            # 🧩 執行預測
            with torch.no_grad():
                outputs = model(img)
                probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
                predicted_index = torch.argmax(probabilities).item()
                predicted_name = class_names[predicted_index]
                confidence = round(probabilities[predicted_index].item() * 100, 2)

            return jsonify({
                "message": "辨識成功！",
                "name": predicted_name,
                "confidence": f"{confidence}%"
            })
        except Exception as e:
            return jsonify({"error": f"預測過程中發生錯誤: {str(e)}"}), 500
