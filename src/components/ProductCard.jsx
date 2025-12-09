import { useCartStore } from "../store/cartStore.js";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>

      <button
        className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
