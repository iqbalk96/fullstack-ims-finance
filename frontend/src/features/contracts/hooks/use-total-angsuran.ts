import { useQuery } from "@tanstack/react-query";
import { getTotalAngsuran } from "../services/contract.service";

export function useTotalAngsuran(contractNo: string, cutoffDate: string) {
  return useQuery({
    queryKey: ["total-angsuran", contractNo, cutoffDate],
    queryFn: () => getTotalAngsuran(contractNo, cutoffDate),
    enabled: !!contractNo && !!cutoffDate,
  });
}