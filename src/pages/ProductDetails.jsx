import { useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProducts";
import { useCartStore } from "../store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProductById(id);
  const addToCart = useCartStore((s) => s.addToCart);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-600">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-red-500 font-medium">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 md:h-96 object-cover rounded-xl shadow"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          {product.title}
        </h1>

        <p className="text-slate-600 mt-3">{product.description}</p>

        <p className="text-3xl font-bold text-blue-600 mt-6">
          ₹{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 inline-flex justify-center px-6 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
