import { useTotalAngsuran } from "./use-total-angsuran";
import { usePenalty } from "./use-penalty";

export function useContractReport(contractNo: string, cutoffDate: string) {
  const total = useTotalAngsuran(contractNo, cutoffDate);
  const penalty = usePenalty(contractNo, cutoffDate);

  return {
    total,
    penalty,
    isLoading: total.isLoading || penalty.isLoading,
  };
}