import { useQuery } from "@tanstack/react-query";
import { getPenalty } from "../services/contract.service";

export function usePenalty(contractNo: string, cutoffDate: string) {
  return useQuery({
    queryKey: ["penalty", contractNo, cutoffDate],
    queryFn: () => getPenalty(contractNo, cutoffDate),
    enabled: !!contractNo && !!cutoffDate,
  });
}