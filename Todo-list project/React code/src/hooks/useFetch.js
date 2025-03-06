import { useState, useEffect } from "react";

export const useFetch = ({ setData }) => {

    const [loading, setLoading] = useState(false);

    const makeAPICall = async () => {
        const contorller = new AbortController();
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5200/api/tasks",
                { signal: contorller.signal },
                {
                    method: "GET",
                    mode: 'cors',
                    headers: { "Content-Type": "application/json" }
                });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (e) {
            console.log("Exception occured" + e);
        }
        finally {
            setLoading(false);
        }
        return () => {
            contorller.abort();
        }
    };

    useEffect(() => {
        makeAPICall();
    }, []);

    return { loading };
};