import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useCartStore((s) => s.cart);
  const clearCart = useCartStore((s) => s.clearCart);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-slate-600 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-flex px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[2fr,1fr] gap-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <aside className="bg-white rounded-xl shadow-sm p-5 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-sm">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between mb-4 font-semibold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              to="/checkout"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-3"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={clearCart}
              className="w-full text-center border border-slate-300 py-2 rounded-md text-sm hover:bg-slate-50"
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
