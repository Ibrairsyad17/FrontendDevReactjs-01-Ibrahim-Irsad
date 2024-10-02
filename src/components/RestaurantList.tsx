import useRestaurants from "@/hooks/useRestaurants";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";

const RestaurantList = () => {
  const { restaurants, error } = useRestaurants();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">All Restaurants</h1>
      {error && <div className="text-red-500">{error}</div>}
      <ul className="grid lg:grid-cols-4 gap-x-6 gap-y-10">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="gap-5 flex flex-col">
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden h-48 w-full mb-4">
                <img
                  src={
                    restaurant.photos.length > 0
                      ? restaurant.photos[0]
                      : "https://via.placeholder.com/300"
                  }
                  alt={restaurant.name}
                  className="h-full w-full object-cover rounded-none hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(restaurant.rating)
                        ? "text-blue-900 fill-blue-900"
                        : "text-blue-900"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2 items-center uppercase text-xs">
                  <span className="text-gray-900">{restaurant.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{restaurant.price}</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  {restaurant.open ? (
                    <div className="h-4 w-4 bg-teal-300 rounded-full">
                      <span className="sr-only">Open</span>
                    </div>
                  ) : (
                    <div className="h-4 w-4 bg-red-500 rounded-full">
                      <span className="sr-only">Closed</span>
                    </div>
                  )}
                  <span className="text-gray-500 uppercase">
                    {restaurant.open ? "Open" : "Closed"}
                  </span>
                </div>
              </div>
            </div>

            <Button className="rounded-none bg-blue-900 hover:bg-blue-800 uppercase tracking-widest py-4 font-light">
              Learn More
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
