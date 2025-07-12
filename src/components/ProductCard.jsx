import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="block group">
    <Card className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden bg-white dark:bg-gray-900">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="h-44 flex items-center justify-center mb-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {product.title}
        </h3>
        <h4 className="font-semibold text-gray-400 dark:text-white">{product.category}</h4>
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
          ${product.price}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
    </Card>
  </Link>
);

export default ProductCard;
