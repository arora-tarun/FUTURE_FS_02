import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 🚀 RUN THIS ONLY ONE TIME TO SEED PRODUCTS
// import { seedProducts } from "./firebase/seed";
// seedProducts();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
