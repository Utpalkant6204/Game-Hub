import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoints : string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoints)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        // if (err instanceof CancelledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, error, isloading };
};

export default useData;
