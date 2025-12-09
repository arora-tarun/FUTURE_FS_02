import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore.js";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="flex justify-between px-6 py-4 bg-blue-600 text-white shadow">
      <Link to="/" className="font-bold text-2xl">
        MiniStore
      </Link>

      <Link to="/cart" className="relative text-lg">
        🛒 Cart
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 text-white px-2 rounded-full text-sm">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
