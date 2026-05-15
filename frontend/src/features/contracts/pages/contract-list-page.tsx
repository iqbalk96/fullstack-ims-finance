// src/features/contracts/pages/contract-list-page.tsx

import { Button } from "@/shared/components/ui/button";
import { ContractTable } from "../components/contract-table";
import { useNavigate } from "react-router-dom";

export default function ContractListPage() {

  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Contracts</h1>
        <Button type="button" onClick={() => navigate("/create")}>
          Add Contract
        </Button>
      </div>
      <ContractTable />
    </div>
  );
}