import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been placed successfully!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <textarea
          required
          placeholder="Address"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        ></textarea>

        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
