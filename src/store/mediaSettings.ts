import { create } from "zustand";

interface MediaSettings {
  isMuted: boolean;
  toggleMute: () => void;
  setMuted: (val: boolean) => void;
}

export const useMediaSettings = create<MediaSettings>((set) => ({
  isMuted: true,
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
  setMuted: (val) => set({ isMuted: val }),
}));
