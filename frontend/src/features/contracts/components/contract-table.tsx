// src/features/contracts/components/contract-table.tsx

import { useState } from "react";
import { useContracts } from "../hooks/use-contracts";
import { ContractListTable } from "./contract-list-table";

export function ContractTable() {
  const { data, isLoading, isError } = useContracts();

  const [expandedContractNo, setExpandedContractNo] = useState<
    string | null
  >(null);

  const handleToggle = (contractNo: string) => {
    setExpandedContractNo((prev) =>
      prev === contractNo ? null : contractNo
    );
  };

  if (isLoading) {
    return <div>Loading contracts...</div>;
  }

  if (isError) {
    return <div>Failed to load contracts</div>;
  }

  return (
    <ContractListTable
      data={data ?? []}
      expandedContractNo={expandedContractNo}
      onToggle={handleToggle}
    />
  );
}