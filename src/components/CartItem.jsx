import { useCartStore } from "../store/cartStore";

export default function CartItem({ item }) {
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  return (
    <div className="flex gap-4 items-center bg-white rounded-lg shadow-sm p-4">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-slate-800">{item.title}</h3>
        <p className="text-blue-600 font-semibold">₹{item.price}</p>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="px-3 py-1 text-sm rounded-md border border-red-300 text-red-600 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
}

