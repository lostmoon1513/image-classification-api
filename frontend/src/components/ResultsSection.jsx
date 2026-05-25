export default function ResultsSection({
  results
}) {
  return (
    <section className="results-section">

      <p className="section-label">
        Model Analysis
      </p>

      <h2 className="result-title">
        {results?.top_prediction ||
          "Awaiting Analysis"}
      </h2>

      <p className="result-confidence">
        Confidence ·{" "}
        {results?.confidence || 0}%
      </p>

      <div className="prediction-divider"></div>

      <div className="predictions-list">

        {results?.predictions?.map(
          (item, index) => (
            <div
              className="prediction-card"
              key={index}
            >

              <div className="prediction-top">

                <div className="prediction-left">

                  <span className="prediction-rank">
                    {index + 1}
                  </span>

                  <span className="prediction-label">
                    {item.label}
                  </span>

                </div>

                <span className="prediction-value">
                  {item.confidence}%
                </span>

              </div>

              <div className="prediction-bar-wrapper">

                <div className="prediction-bar-container">

                  <div
                    className="prediction-bar"
                    style={{
                      width: `${item.confidence}%`
                    }}
                  />

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </section>
  );
}