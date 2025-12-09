import { useCartStore } from "../store/cartStore.js";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCartStore();

  return (
    <div className="flex justify-between items-center border p-3 rounded mb-3">
      <div>
        <h2 className="font-semibold">{item.name}</h2>
        <p>₹{item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="px-2 bg-gray-300 rounded"
          onClick={() => decreaseQty(item.id)}
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          className="px-2 bg-gray-300 rounded"
          onClick={() => increaseQty(item.id)}
        >
          +
        </button>
      </div>

      <button
        className="text-red-600"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
