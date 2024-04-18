import { create } from "zustand";

const useStore = create((set) => ({
  vendorId: "",
  setVendorId: (vendorId) => {
    set((state) => ({
      vendorId,
    }));
  },
}));

export { useStore };
