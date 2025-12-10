import { useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../api/productApi";

// Fetch ALL products
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { products, loading, error };
}

// Fetch single product by ID
export function useProductById(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message || "Product not found");
      } finally {
        setLoading(false);
      }
    }

    if (id) load();
  }, [id]);

  return { product, loading, error };
}
