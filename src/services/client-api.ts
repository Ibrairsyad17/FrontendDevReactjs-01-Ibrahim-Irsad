import { Category, Restaurant } from "@/types/interfaces";
import { createApi } from "@reduxjs/toolkit/query/react";
import httpClient from "./http-client";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: httpClient({ baseUrl: "http://localhost:5174" }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({ url: "/categories", method: "get" }),
    }),
    getRestaurants: builder.query<Restaurant[], { category: string }>({
      query: ({ category }) => ({
        url: "/restaurants",
        method: "get",
        params: { category },
      }),
    }),
    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => ({ url: `/restaurants/${id}`, method: "get" }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetCategoriesQuery,
  useGetRestaurantByIdQuery,
} = clientApi;
