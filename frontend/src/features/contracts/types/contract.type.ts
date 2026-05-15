export interface CreateContractPayload {
  contractNo: string;
  clientName: string;
  otr: number;
  dpPercentage: number;
  tenorMonths: number;
}

export interface ContractCalculation {
  dpAmount: number;
  loanAmount: number;
  monthlyInstallment: number;
}

export interface Contract {
  id: number;
  contractNo: string;
  clientName: string;
  otr: number;
  dpPercentage: number;
  dpAmount: number;
  loanAmount: number;
  tenorMonths: number;
  installments: Installment[];
}


export interface Installment {
  id: number;
  contractId: number;
  installmentNo: number;
  amount: number;
  dueDate: string;
  isPaid: boolean;
}
