import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import ProductFilters from "../components/ProductFilters";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({ search: "", category: "All" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [productRes, categoryRes] = await Promise.all([
        axios.get("https://fakestoreapi.com/products"),
        axios.get("https://fakestoreapi.com/products/categories"),
      ]);

      setAllProducts(productRes.data);
      setFiltered(productRes.data);
      setCategories(categoryRes.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = allProducts.filter((item) => {
      return (
        item.title.toLowerCase().includes(filter.search.toLowerCase()) &&
        (filter.category === "All" || item.category === filter.category)
      );
    });
    setFiltered(filteredData);
  }, [filter, allProducts]);

  return (
    <div>
      <Header />
      <div className="p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filter */}
        <aside className="md:col-span-1 bg-white dark:bg-gray-900 p-4 rounded-md shadow relative">
          <ProductFilters
            categories={categories}
            onSearch={(search) => setFilter((prev) => ({ ...prev, search }))}
            onCategory={(category) =>
              setFilter((prev) => ({ ...prev, category }))
            }
          />
        </aside>

        {/* Product List */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))
          ) : filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-300 py-10">
              No products found.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
