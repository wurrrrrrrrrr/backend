import { useState } from "react";
import "./ImageUploader.css"
export default function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="ImageUploader">
      <div className="Image_frame">
        {image && (
            <img
            src={image}
            alt="Selected"
            className="Selected images"
            />
        )}
      </div>
      <div className="button_group">
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded-lg"
        />
        <button>submmit</button>
      </div>
    </div>
  );
}
