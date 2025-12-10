import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-xl transition p-4 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="mt-4 font-semibold text-lg line-clamp-1">
        {product.title}
      </h3>

      <p className="text-indigo-600 font-bold mt-2">₹{product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="mt-4 block bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}


