import { useMutation } from "@tanstack/react-query";

import { createContract } from "../services/contract.service";

export function useCreateContract() {
  return useMutation({
    mutationFn: createContract,
  });
}