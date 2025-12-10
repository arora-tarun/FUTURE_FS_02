import { create } from "zustand";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  init: () => {
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const { uid, email, displayName } = fbUser;
        set({ user: { uid, email, displayName }, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
    return unsub;
  },

  register: async ({ name, email, password }) => {
    set({ error: null });
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });

      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email,
        name,
        role: "user",
        createdAt: new Date(),
      });

      set({
        user: { uid: cred.user.uid, email, displayName: name },
      });
    } catch (err) {
      console.error(err);
      set({ error: err.message || "Registration failed" });
    }
  },

  login: async ({ email, password }) => {
    set({ error: null });
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const { uid, email: em, displayName } = cred.user;
      set({ user: { uid, email: em, displayName } });
    } catch (err) {
      console.error(err);
      set({ error: err.message || "Login failed" });
    }
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null });
  },
}));
