import React, { useState } from "react";
import axios from "axios";

function CompanyUrlInput() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async () => {
    // Call your API with the 'url' value as a parameter
    // Example: apiCall(url);
    const apiKey = "AIzaSyCiBzxxsnKJkEAwqz8vPtR-G7oIwobL_S0"; // Replace with your actual API key
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&key=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
    console.log(url); // Just for demonstration purposes
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
