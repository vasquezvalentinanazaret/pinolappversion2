import { create } from "zustand";

export const useCart = create((set) => ({
  items: JSON.parse(localStorage.getItem("cart")) || [],

  addItem: (item) =>
    set((state) => {
      const updated = [...state.items, item];
      localStorage.setItem("cart", JSON.stringify(updated));
      return { items: updated };
    }),

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  }
}));
