import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-500 py-10">Product not found.</div>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl h-screen mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <Card className="p-6 flex items-center justify-center h-full">
            <img
              src={product.image}
              alt={product.title}
              className="h-72 w-auto object-contain"
            />
          </Card>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {product.title}
          </h1>
          <h3 className="capitalize text-sm">{product.category}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price}
          </p>
          <Button className="mt-4 w-full sm:w-auto">Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
