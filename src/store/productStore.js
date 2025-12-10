import { create } from "zustand";
import { getProducts, getProductById } from "../api/productApi";

export const useProductStore = create((set) => ({
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,

  // Fetch all products
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const list = await getProducts();
      set({ products: list, loading: false });
    } catch (error) {
      console.error("Failed to load products:", error);
      set({ error: "Failed to load products", loading: false });
    }
  },

  // Fetch a single product by ID
  fetchProductById: async (id) => {
    if (!id) {
      console.error("Invalid product ID");
      set({ error: "Invalid product ID", loading: false });
      return;
    }

    set({ loading: true, error: null });

    try {
      const product = await getProductById(id);

      if (!product || Object.keys(product).length === 0) {
        set({
          selectedProduct: null,
          error: "Product not found",
          loading: false,
        });
        return;
      }

      set({ selectedProduct: product, loading: false });
      
    } catch (error) {
      console.error("Error fetching product:", error);
      set({
        error: "Product not found",
        selectedProduct: null,
        loading: false,
      });
    }
  },
}));
