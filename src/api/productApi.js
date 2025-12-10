import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const productsRef = collection(db, "products");

// GET ALL PRODUCTS ------------------------------------------------------
export async function getAllProducts() {
  const snap = await getDocs(productsRef);

  return snap.docs.map(d => ({
    id: d.id,
    ...d.data(),
  }));
}

// GET PRODUCT BY ID ------------------------------------------------------
export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) throw new Error("Product not found");

  return { id: snap.id, ...snap.data() };
}

// CREATE PRODUCT ---------------------------------------------------------
export async function createProduct(data) {
  return await addDoc(productsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
}
