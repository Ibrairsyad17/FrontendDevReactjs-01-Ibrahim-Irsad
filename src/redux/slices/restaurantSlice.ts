import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RestaurantState {
  filters: {
    category: string;
    open: boolean;
    priceRange: [number, number];
  };
}

const initialState: RestaurantState = {
  filters: {
    category: "",
    open: false,
    priceRange: [0, 100],
  },
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        key: keyof RestaurantState["filters"];
        value: string | boolean | [number, number];
      }>
    ) => {
      state.filters[action.payload.key] = action.payload.value as never;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilter, clearFilters } = restaurantSlice.actions;
export default restaurantSlice.reducer;
