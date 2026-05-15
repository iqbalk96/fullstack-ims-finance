import { useQuery } from "@tanstack/react-query";

import { getContracts } from "../services/contract.service";

export function useContracts() {
  return useQuery({
    queryKey: ["contracts"],
    queryFn: getContracts,
  });
}