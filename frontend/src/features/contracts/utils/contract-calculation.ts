import type {
  ContractCalculation,
} from "../types/contract.type";

export function calculateContract(
  otr: number,
  dpPercentage: number,
  tenorMonths: number
): ContractCalculation {
  const dpAmount =
    otr * (dpPercentage / 100);

  const loanAmount =
    otr - dpAmount;

  const monthlyInstallment =
    Math.ceil(
      loanAmount / tenorMonths
    );

  return {
    dpAmount,
    loanAmount,
    monthlyInstallment,
  };
}