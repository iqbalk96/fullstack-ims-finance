import { api } from "@/shared/services/api";

import type { CreateContractPayload } from "../types/contract.type";

export async function createContract(payload: CreateContractPayload) {
  const response = await api.post("/contracts", payload);

  return response.data;
}

export async function getContracts() {
  const response = await api.get("/contracts");

  return response.data?.data;
}

export async function getTotalAngsuran(contractNo: string, cutoffDate: string) {
  const response = await api.get("/api/contracts/total-angsuran", {
    params: { contractNo, cutoffDate },
  });

  return response.data?.data;
}

export async function getPenalty(contractNo: string, cutoffDate: string) {
  const response = await api.get("/api/contracts/penalty", {
    params: { contractNo, cutoffDate },
  });

  return response.data?.data;
}
