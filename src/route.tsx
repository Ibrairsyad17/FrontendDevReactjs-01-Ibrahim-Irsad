import { createBrowserRouter } from "react-router-dom";
import RestaurantDetail from "./components/Details/RestaurantDetail";
import Home from "./components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantDetail />,
  },
]);
