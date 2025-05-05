import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type darkModeStoreT = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const darkModeStore = create<darkModeStoreT>()(
  persist(
    (set) => ({
      darkMode: true,
      setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
      name: 'dark-mode-storage',
    }
  )
);

export default darkModeStore;
