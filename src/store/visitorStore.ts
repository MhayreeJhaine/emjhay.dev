import { create } from "zustand";
import { persist } from "zustand/middleware";

type VisitorState = {
  visitorMode: boolean;
  switchToOwner: () => void;
  switchToVisitor: () => void;
};

export const useVisitorStore = create<VisitorState>()(
  persist(
    (set) => ({
      visitorMode: true,
      switchToOwner: () => set(() => ({ visitorMode: false })),
      switchToVisitor: () => set(() => ({ visitorMode: true })),
    }),
    {
      name: "visitor-mode-storage", // key for localStorage
    }
  )
);
