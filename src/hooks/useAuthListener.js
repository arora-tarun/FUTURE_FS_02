import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export const useAuthListener = () => {
  const init = useAuthStore((s) => s.init);

  useEffect(() => {
    const unsub = init();
    return () => unsub && unsub();
  }, [init]);
};
