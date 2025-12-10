import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import { getAllOrders } from "../api/orderApi";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const p = await getAllProducts();
        setProducts(p);
        const o = await getAllOrders();
        setOrders(o);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link
          to="/admin/add-product"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </Link>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        {products.length === 0 ? (
          <p>No products yet.</p>
        ) : (
          <ul className="space-y-2">
            {products.map((p) => (
              <li
                key={p.id}
                className="border p-3 rounded flex justify-between"
              >
                <span>{p.name}</span>
                <span>{formatPrice(p.price)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul className="space-y-2">
            {orders.map((o) => (
              <li
                key={o.id}
                className="border p-3 rounded flex justify-between"
              >
                <span>{o.userId}</span>
                <span>{formatPrice(o.total)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;

