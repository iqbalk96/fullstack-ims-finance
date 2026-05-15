import { z } from "zod";

export const contractSchema =
  z.object({
    contractNo: z
      .string()
      .min(1, "Contract No is required"),

    clientName: z
      .string()
      .min(1, "Client Name is required"),

    otr: z
      .number()
      .min(1, "OTR is required"),

    dpPercentage: z
      .number()
      .min(1)
      .max(100),

    tenorMonths: z
      .number()
      .min(1),
  });

export type ContractSchema =
  z.infer<
    typeof contractSchema
  >;