import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeAPICall = async () => {
    try {
      setLoading(true);
      const response = await fetch(url,
        {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
          }
        });
      const data = await response.json();
      setLoading(false);
      setData(data);
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall();
  }, [url]);


  return { data, setData, loading };
}
