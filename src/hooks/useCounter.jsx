import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUrl();
  }, []);
  const fetchUrl = async () => {
    setLoading(true);

    try {
      const info = await fetch(url);
      const res = await info.json();
      setData(res);
      setError("");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError("unexpected error occured", e);
    }
  };
  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
