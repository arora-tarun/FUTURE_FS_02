import CartItem from "../components/CartItem.jsx";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore.js";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="text-right text-xl font-semibold mt-4">
            Total: ₹{total}
          </div>

          <Link
            to="/checkout"
            className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
