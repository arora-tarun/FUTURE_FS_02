import { useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const unsplash = (keyword) =>
  `https://source.unsplash.com/600x600/?${keyword},product,india`;

const products = [
  {
    title: "Wireless Headphones",
    category: "electronics",
    price: 1499,
    description: "High-quality Bluetooth wireless headphones with deep bass.",
    image: unsplash("headphones"),
  },
  {
    title: "Smart Watch",
    category: "electronics",
    price: 2499,
    description: "Fitness tracking smart watch with heart-rate monitor.",
    image: unsplash("smartwatch"),
  },
  {
    title: "Formal Shirt",
    category: "fashion",
    price: 999,
    description: "Premium cotton men's slim-fit formal shirt.",
    image: unsplash("shirt"),
  },
  {
    title: "Running Shoes",
    category: "fashion",
    price: 1599,
    description: "Breathable lightweight sports running shoes.",
    image: unsplash("shoes"),
  },
  {
    title: "Backpack",
    category: "bags",
    price: 899,
    description: "Durable waterproof travel & laptop backpack.",
    image: unsplash("backpack"),
  },
];

// Duplicate the array to reach 50 products
const finalProducts = Array(10)
  .fill(products)
  .flat()
  .map((p, i) => ({
    ...p,
    title: `${p.title} ${i + 1}`,
  }));

export default function Seed50() {
  useEffect(() => {
    async function seed() {
      try {
        const colRef = collection(db, "products");

        for (let product of finalProducts) {
          await addDoc(colRef, {
            ...product,
            createdAt: serverTimestamp(),
          });
        }

        alert("50 Products Added Successfully!");
      } catch (err) {
        console.error(err);
        alert("Error: " + err.message);
      }
    }

    seed();
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold">Adding 50 Products...</h1>
      <p>Please wait 5–10 seconds.</p>
    </div>
  );
}
