import { useState } from "react";
import axios from "axios";
import "./ImageUploader.css";

export default function ImageUploader() {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setResponse(null);
      setError(null);
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      setError("請選擇圖片後再上傳！");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:5001/predict_face", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "上傳失敗，請稍後再試！");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-uploader">
      <div className="image-frame">
        {imagePreview && <img src={imagePreview} alt="Selected" className="selected-image" />}
      </div>
      <div className="button-group">
        <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
        <button onClick={uploadImage} className="upload-button" disabled={loading}>
          {loading ? "上傳中..." : "提交"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {response && (
        <div className="response-box">
          <p><strong>訊息：</strong> {response.message}</p>
          <p><strong>姓名：</strong> {response.name}</p>
          <p><strong>信心度：</strong> {response.confidence}</p>
        </div>
      )}
    </div>
  );
}
