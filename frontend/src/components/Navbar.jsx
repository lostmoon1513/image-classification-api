export default function Navbar({
  darkMode,
  setDarkMode
}) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        VisionAI
      </div>

      <div className="nav-links">
        <a href="#" className="nav-link">
          DOCS
        </a>

        <a href="https://github.com/lostmoon1513/image-classification-api" className="nav-link">
          GITHUB
        </a>

        <button
          className="nav-button"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode
            ? "LIGHT MODE"
            : "DARK MODE"}
        </button>
      </div>
    </nav>
  );
}