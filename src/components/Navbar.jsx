import { Link, NavLink } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const cartCount = useCartStore((s) => s.cart?.length || 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MiniStore
        </Link>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Checkout
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Admin
          </NavLink>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <span className="hidden sm:inline text-slate-700">
                Hi, {user.displayName || "user"}
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 rounded-md border border-slate-300 hover:bg-slate-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 rounded-md border border-slate-300 hover:bg-slate-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden sm:inline px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}

          <Link
            to="/cart"
            className="relative flex items-center gap-1 text-slate-700 hover:text-blue-600"
          >
            🛒
            <span>Cart</span>
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

