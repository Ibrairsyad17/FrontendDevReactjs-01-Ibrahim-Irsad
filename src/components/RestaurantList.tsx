import useRestaurants from "@/hooks/useRestaurants";

const RestaurantList = () => {
  const { restaurants, error } = useRestaurants();

  return (
    <div>
      <h1>Restaurants</h1>
      {error && <div className="text-red-500">{error}</div>}
      <ul className="grid grid-cols-4 gap-4">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Rating: {restaurant.rating}</p>
            <p>Price: {restaurant.price}</p>
            <p>Open: {restaurant.open ? "Yes" : "No"}</p>
            <p>Categories: {restaurant.categories.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
