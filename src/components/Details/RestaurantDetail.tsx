import { useNavigate, useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "@/services/client-api";
import { StarIcon } from "lucide-react";
import ReviewSection from "./ReviewSection";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: restaurant,
    error,
    isLoading,
  } = useGetRestaurantByIdQuery(id || "");
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  if (error) return <div>Error</div>;

  return (
    <section className="bg-white antialiased flex flex-col space-y-8 justify-center items-center px-8">
      <div className="max-w-screen-xl mt-6 p-4 mx-auto 2xl:px-0">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Detail Restoran
          </h1>
        </div>

        <div className="lg:grid lg:gap-8 place-content-center place-items-center ">
          <ScrollArea className="shrink-0 max-w-md lg:max-w-lg mx-auto  flex gap-4 pb-6">
            <div className="flex space-x-4">
              {restaurant?.photos.map((photo, i) => (
                <img
                  key={i}
                  className="w-[75%] object-cover rounded-xl shadow-lg"
                  src={photo}
                  alt={restaurant?.name}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="mt-4 lg:mt-0 flex flex-col gap-6 w-full">
            <h1 className="font-semibold text-gray-900 text-4xl dark:text-white">
              {restaurant?.name}
            </h1>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-8 w-8 ${
                    i < Math.floor(restaurant?.rating || 0)
                      ? "text-blue-900 fill-blue-900"
                      : "text-blue-900"
                  }`}
                />
              ))}
            </div>
            <div className="sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                ${restaurant?.price}
              </p>
            </div>
            <p className="text-md">Kategori: {restaurant?.category}</p>

            <hr className="border-gray-200" />

            <ReviewSection
              restaurant={
                restaurant || {
                  id: 0,
                  name: "",
                  rating: 0,
                  category: "",
                  price: "",
                  open: false,
                  photos: [],
                  reviews: [],
                }
              }
            />

            <Button
              onClick={() => navigate("/")}
              className="rounded-none bg-blue-900 hover:bg-blue-800"
            >
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetail;
