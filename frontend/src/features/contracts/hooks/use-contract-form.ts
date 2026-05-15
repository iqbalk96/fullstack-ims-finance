import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contractSchema,
  type ContractSchema,
} from "../schemas/contract.schema";

import { calculateContract } from "../utils/contract-calculation";

export function useContractForm() {
  const form = useForm<ContractSchema>({
    resolver: zodResolver(contractSchema),
    defaultValues: {
      dpPercentage: 20,
      tenorMonths: 18,
    },
  });

  const otr = Number(form.watch("otr")) || 0;
  const dpPercentage = Number(form.watch("dpPercentage")) || 0;
  const tenorMonths = Number(form.watch("tenorMonths")) || 1;

  const calculation = useMemo(() => {
    return calculateContract(
      otr,
      dpPercentage,
      tenorMonths
    );
  }, [otr, dpPercentage, tenorMonths]);

  return {
    form,
    calculation,
  };
}