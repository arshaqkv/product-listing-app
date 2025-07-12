import { Input } from "../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

const ProductFilters = ({ categories, onSearch, onCategory }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-1">Search</label>
      <Input
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full placeholder:text-gray-900 dark:placeholder:text-white"
      />
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Category</label>
      <Select onValueChange={onCategory}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All</SelectItem>
          {categories.map((cat, i) => (
            <SelectItem key={i} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
);

export default ProductFilters;
