import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAddProduct from "./pages/AdminAddProduct";
import ProtectedRoute from "./components/ProtectedRoute";

// SEEDING COMPONENT
import Seed50 from "./utils/Seed50";

import { useAuthStore } from "./store/authStore";

function App() {
  const initAuth = useAuthStore((state) => state.init);

  useEffect(() => {
    const unsub = initAuth();
    return () => unsub && unsub();
  }, [initAuth]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AdminAddProduct />} />

        {/* TEMPORARY: SEED ROUTE */}
        <Route path="/seed50" element={<Seed50 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
