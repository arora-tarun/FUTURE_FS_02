import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// SAMPLE PRODUCTS — you can add as many as you want
const sampleProducts = [
  {
    title: "Wireless Headphones",
    category: "electronics",
    price: 1499,
    description: "High quality wireless headphones",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Smart Watch",
    category: "wearables",
    price: 2999,
    description: "Premium smartwatch with fitness tracking",
    image: "https://via.placeholder.com/320",
  },
  {
    title: "Running Shoes",
    category: "fashion",
    price: 1999,
    description: "Comfortable running shoes for everyday use",
    image: "https://via.placeholder.com/350",
  },
  {
    title: "Laptop Backpack",
    category: "accessories",
    price: 1299,
    description: "Waterproof laptop backpack for 15-inch laptops",
    image: "https://via.placeholder.com/310",
  }
];

export async function seedProducts() {
  try {
    console.log("🌱 Starting seeding...");

    for (const product of sampleProducts) {
      await addDoc(collection(db, "products"), product);
      console.log("Added:", product.title);
    }

    console.log("🎉 All products seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding products:", error);
  }
}
