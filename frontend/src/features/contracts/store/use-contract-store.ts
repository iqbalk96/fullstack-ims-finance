import { create } from "zustand";

interface ContractStore {
  selectedContractId:
    number | null;

  setSelectedContractId: (
    id: number | null
  ) => void;
}

export const useContractStore =
  create<ContractStore>((set) => ({
    selectedContractId: null,

    setSelectedContractId: (
      id
    ) =>
      set({
        selectedContractId: id,
      }),
  }));