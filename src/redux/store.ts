import { configureStore } from "@reduxjs/toolkit";
import { clientApi } from "@/services/client-api";
import { setupListeners } from "@reduxjs/toolkit/query";
import restaurantReducer from "./slices/restaurantSlice";

const store = configureStore({
  reducer: {
    [clientApi.reducerPath]: clientApi.reducer,
    restaurants: restaurantReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
