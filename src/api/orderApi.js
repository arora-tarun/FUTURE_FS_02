import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const ordersCol = collection(db, "orders");

export const createOrder = async ({ userId, items, total, shipping }) => {
  const docRef = await addDoc(ordersCol, {
    userId,
    items,
    total,
    shipping,
    status: "pending",
    createdAt: serverTimestamp(),
  });
  return docRef.id;
};

export const getUserOrders = async (userId) => {
  const q = query(
    ordersCol,
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// For admin
export const getAllOrders = async () => {
  const q = query(ordersCol, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
};
