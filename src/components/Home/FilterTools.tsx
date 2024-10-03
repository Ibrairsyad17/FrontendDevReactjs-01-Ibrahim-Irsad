import useFilters from "@/hooks/useFilters";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetCategoriesQuery } from "@/services/client-api";

const FilterTools = () => {
  const { data, error, isLoading } = useGetCategoriesQuery();
  const { filters, updateFilter, resetFilters } = useFilters();

  return (
    <div className="border-y py-4 flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
      <div className="flex flex-wrap flex-col lg:flex-row gap-5 lg:items-center">
        <span className="text-sm text-gray-500">Filter By:</span>
        <div className="flex items-center space-x-2 lg:border-b py-2.5">
          <input
            type="checkbox"
            name="open-now"
            id="open-now"
            checked={filters.open}
            onChange={(e) => updateFilter("open", e.target.checked)}
            className="h-4 w-4 border border-gray-300 rounded-full checked:bg-blue-900 checked:border-transparent focus:outline-none"
          />
          <label htmlFor="open-now" className="text-sm">
            Open Now
          </label>
        </div>
        <Select
          value={filters.price}
          onValueChange={(value) => updateFilter("price", value)}
        >
          <SelectTrigger className="lg:w-[120px] w-full">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Termurah</SelectItem>
            <SelectItem value="desc">Termahal</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={filters.category}
          onValueChange={(value) => updateFilter("category", value)}
        >
          <SelectTrigger className="lg:w-[120px] w-full">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            {error && (
              <div className="text-red-500">{JSON.stringify(error)}</div>
            )}
            {isLoading && <div className="text-gray-500">Loading...</div>}
            {data?.map((category) => (
              <SelectItem key={category.id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="font-medium text-gray-400 py-3 px-6 tracking-widest rounded-none"
        onClick={resetFilters}
      >
        CLEAR ALL
      </Button>
    </div>
  );
};

export default FilterTools;
