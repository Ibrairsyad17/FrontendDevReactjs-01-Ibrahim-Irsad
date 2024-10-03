import httpClient from "@/services/http-client";
import { Category } from "@/types/interfaces";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    httpClient
      .get<Category[]>("/categories", { signal: controller.signal })
      .then((response) => setCategories(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { categories, error };
};

export default useCategories;
