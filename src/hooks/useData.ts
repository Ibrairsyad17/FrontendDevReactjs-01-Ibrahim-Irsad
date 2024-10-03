import httpClient from "@/services/http-client";
import { CanceledError } from "axios";
import React from "react";

const useData = <T>(endpoint: string) => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    httpClient
      .get<T>(endpoint, { signal: controller.signal })
      .then((response) => setData(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { data, error, loading };
};

export default useData;
