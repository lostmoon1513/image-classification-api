import { useState } from "react";
import axios from "axios";

export default function UploadSection({
  setResults,
  setImage
}) {
  const [selectedFile, setSelectedFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // ONLY select image here
  const handleFileSelect = (file) => {
    if (!file) return;

    setSelectedFile(file);

    setResults(null);

    setImage(URL.createObjectURL(file));

    setError("");
  };

  // ACTUAL prediction happens here
  const handleClassify = async () => {
    if (!selectedFile) {
      setError("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      setError("");

      // Upload image to Cloudinary
      const formData = new FormData();

      formData.append(
        "file",
        selectedFile
      );

      formData.append(
        "upload_preset",
        import.meta.env
          .VITE_CLOUDINARY_PRESET
      );

      const cloudinaryRes =
        await axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env
              .VITE_CLOUDINARY_CLOUD
          }/image/upload`,
          formData
        );

      const imageUrl =
        cloudinaryRes.data.secure_url;

      // Send to FastAPI
      const response =
        await axios.post(
          import.meta.env
            .VITE_BACKEND_URL,
          {
            image_url: imageUrl
          }
        );

      setResults(response.data);

    } catch (err) {
      console.log(err);

      setError(
        "Backend server is not running."
      );
    }

    setLoading(false);
  };

  return (
    <section className="upload-section">
      <p className="section-label">
        Upload
      </p>

      <label className="upload-zone">

        <input
          type="file"
          hidden
          accept="image/*"
          onChange={(e) =>
            handleFileSelect(
              e.target.files[0]
            )
          }
        />

        <div className="upload-icon">
          ↑
        </div>

        <p className="upload-text">
          {selectedFile
            ? selectedFile.name
            : "Drag & drop"}
        </p>

        <p className="upload-subtext">
          or browse your files
        </p>

      </label>

      <button
        className="classify-button"
        onClick={handleClassify}
        disabled={loading}
      >
        {loading
          ? "CLASSIFYING..."
          : "CLASSIFY IMAGE"}
      </button>

      {error && (
        <p
          style={{
            marginTop: "1rem",
            color: "#ff6b6b",
            fontSize: "0.8rem",
            fontFamily: "Space Mono"
          }}
        >
          {error}
        </p>
      )}
    </section>
  );
}