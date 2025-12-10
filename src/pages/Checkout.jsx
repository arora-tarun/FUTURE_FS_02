import { useState } from "react";
import { useCartStore } from "../store/cartStore";

export default function Checkout() {
  const cart = useCartStore((s) => s.cart);
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Checkout simulation successful!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-[2fr,1fr] gap-8">
      <form
        className="bg-white rounded-xl shadow-sm p-6 space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-2">Checkout</h1>

        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pincode</label>
            <input
              name="pincode"
              value={form.pincode}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Payment method
          </label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card (mock)</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          Place Order (Simulation)
        </button>
      </form>

      <aside className="bg-white rounded-xl shadow-sm p-6 h-fit">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-slate-500 text-sm">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-2 text-sm mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-slate-700"
                >
                  <span>{item.title}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold text-slate-900">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
