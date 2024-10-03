import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  setFilter,
  clearFilters,
  RestaurantState,
} from "@/redux/slices/restaurantSlice";

const useFilters = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.restaurants.filters);

  const updateFilter = (
    key: keyof RestaurantState["filters"],
    value: string | boolean | [number, number]
  ) => {
    dispatch(setFilter({ key, value }));
  };

  const resetFilters = () => {
    dispatch(clearFilters());
  };

  return { filters, updateFilter, resetFilters };
};

export default useFilters;
