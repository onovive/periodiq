import create from "zustand";

const useStore = create<any>((set: any) => ({
  currentService: {},
  updateCurrentService: (currentService: {}) => set({ currentService: currentService }),
}));

export default useStore;
