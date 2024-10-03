import { Restaurant } from "@/types/interfaces";
import useData from "./useData";

const useRestaurants = () => useData<Restaurant[]>("/restaurants");

export default useRestaurants;
