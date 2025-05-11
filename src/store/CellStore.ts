import { create } from "zustand";

interface CellStore {
  id: string;
  values: Record<string, string>;
  setCellId: (id: string) => void;
  setCellValue: (id: string, value: string) => void;
}

export const useCell = create<CellStore>((set) => ({
  id: "",
  values: {},
  setCellId: (id) => set({ id }),
  setCellValue: (id, value) =>
    set((state) => ({
      values: { ...state.values, [id]: value },
    })),
}));
