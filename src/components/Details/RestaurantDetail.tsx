import { useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "@/services/client-api";

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: restaurant,
    error,
    isLoading,
  } = useGetRestaurantByIdQuery(id || "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>{restaurant?.name}</h1>
      <p>{restaurant?.rating}</p>
    </div>
  );
};

export default RestaurantDetail;
