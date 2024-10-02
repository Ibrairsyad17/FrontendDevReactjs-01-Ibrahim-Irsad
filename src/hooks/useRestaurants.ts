import httpClient from "@/services/http-client";
import { CanceledError } from "axios";
import React from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  category: string;
  price: string;
  open: boolean;
  photos: string[];
  reviews: Review[];
}
const useRestaurants = () => {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const controller = new AbortController();

    httpClient
      .get<Restaurant[]>("/restaurants", { signal: controller.signal })
      .then((response) => setRestaurants(response.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { restaurants, error };
};

export default useRestaurants;
