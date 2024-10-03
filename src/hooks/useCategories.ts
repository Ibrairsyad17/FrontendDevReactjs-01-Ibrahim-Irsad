import { Category } from "@/types/interfaces";
import useData from "./useData";

const useCategories = () => useData<Category[]>("/categories");

export default useCategories;
