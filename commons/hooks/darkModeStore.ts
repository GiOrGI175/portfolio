import { create } from 'zustand';

type darkModeStoreT = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const darkModeStore = create<darkModeStoreT>((set) => ({
  darkMode:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('darkMode') || 'false')
      : false,
  setDarkMode: (value: boolean) => {
    localStorage.setItem('darkMode', JSON.stringify(value));
    set({ darkMode: value });
  },
}));

export default darkModeStore;
