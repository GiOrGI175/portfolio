import { create } from 'zustand';

type overLayStoreT = {
  overLay: boolean;
  setOverLay: (value: boolean) => void;
};

const overLayStore = create<overLayStoreT>()((set) => ({
  overLay: false,
  setOverLay: (value) => set({ overLay: value }),
}));

export default overLayStore;
