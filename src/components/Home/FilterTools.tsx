import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FilterTools = () => {
  return (
    <div className="border-y py-4 flex justify-between items-center">
      <div className="flex gap-x-5 items-center">
        <span className="text-sm text-gray-500">Filter By:</span>
        <div className="flex items-center space-x-2 border-b py-2.5">
          <Checkbox id="open-now" className="rounded-full" />
          <label htmlFor="open-now" className="text-sm">
            Open Now
          </label>
        </div>
        <Select>
          <SelectTrigger className="w-[120px] ">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Termurah</SelectItem>
            <SelectItem value="medium">Termahal</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[120px] ">
            <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="italian">Italian</SelectItem>
            <SelectItem value="chinese">Chinese</SelectItem>
            <SelectItem value="mexican">Mexican</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="font-medium text-gray-400 py-3 px-6 tracking-widest rounded-none"
      >
        CLEAR ALL
      </Button>
    </div>
  );
};

export default FilterTools;
