import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadSection from "./components/UploadSection";
import ResultsSection from "./components/ResultsSection";

export default function App() {

  const [results, setResults] =
    useState(null);

  const [image, setImage] =
    useState(null);

  const [darkMode, setDarkMode] =
    useState(true);

  useEffect(() => {
    document.body.className = darkMode
      ? "dark-theme"
      : "light-theme";
  }, [darkMode]);

  return (
    <div className="app-container">

      {/* NAVBAR */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN DASHBOARD */}

      <main className="dashboard-container">

        {/* ================= TOP SECTION ================= */}

        <section className="top-section">

          {/* HERO */}

          <div className="hero-panel">

            <Hero />

          </div>

          {/* UPLOAD */}

          <div className="upload-panel">

            <UploadSection
              setResults={setResults}
              setImage={setImage}
            />

          </div>

        </section>

        {/* ================= BOTTOM SECTION ================= */}

        {results && (
          <section className="bottom-section">

            {/* IMAGE PREVIEW */}

            <div className="preview-panel">

              <div className="preview-header">

                <p className="section-label">
                  Preview
                </p>

              </div>

              <div className="preview-image-container">

                <img
                  src={image}
                  alt="preview"
                  className="preview-image"
                />

              </div>

            </div>

            {/* PREDICTIONS */}

            <div className="prediction-panel">

              <ResultsSection
                results={results}
              />

            </div>

          </section>
        )}

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <span className="footer-text">
          REACT · FASTAPI · CLOUDINARY
        </span>

      </footer>

    </div>
  );
}