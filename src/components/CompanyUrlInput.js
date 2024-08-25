import React, { useState } from "react";
import axios from "axios";

function CompanyUrlInput() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async () => {
    const apiKey = "AIzaSyCiBzxxsnKJkEAwqz8vPtR-G7oIwobL_S0";
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&key=${apiKey}`;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.get(apiUrl);
      //   console.log(response.data);
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label>
        Company URL:
        <input type="text" value={url} onChange={handleChange} />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {loading && <p>Loading...</p>}
      {result && (
        <div className="result-container">
          <h3>PageSpeed Insights Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div className="error-message">
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default CompanyUrlInput;
