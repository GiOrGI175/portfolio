import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type navBarStoreT = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const navBarStore = create<navBarStoreT>()((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}));

export default navBarStore;
