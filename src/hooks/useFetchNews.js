import { useState, useEffect } from "react";
import axios from "axios";

// Get API key and host from environment variables
const API_KEY = String(import.meta.env.VITE_RAPID_API_KEY);
const API_HOST = String(import.meta.env.VITE_RAPID_API_HOST);

// Custom hook to fetch news data
const useFetchNews = (url) => {
  // State variables for loading, error, and data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch news data from the provided URL
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://news-api14.p.rapidapi.com/v2/article",
        params: {
          url: url,
          type: "html",
        },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};

export default useFetchNews;
