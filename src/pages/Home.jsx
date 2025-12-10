import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <div className="p-10 text-center text-lg font-medium">
        Loading products...
      </div>
    );

  if (error)
    return (
      <div className="p-10 text-center text-red-600 text-lg">
        {error}
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Products</h1>
      <p className="text-gray-600 mb-8">
        Browse our curated selection of items.
      </p>

      {products.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

