import { Category, Restaurant } from "@/types/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5174" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], { category?: string }>({
      query: ({ category }) => ({
        url: "/restaurants",
        params: { category },
      }),
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetCategoriesQuery } = clientApi;
