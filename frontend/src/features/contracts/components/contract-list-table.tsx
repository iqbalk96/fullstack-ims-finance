// src/features/contracts/components/contract-list-table.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

import { Button } from "@/shared/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { InstallmentTable } from "./installment-table";
import { Contract } from "../types/contract.type";

type Props = {
  data: Contract[];
  expandedContractNo: string | null;
  onToggle: (contractNo: string) => void;
};

export function ContractListTable({
  data,
  expandedContractNo,
  onToggle,
}: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Contract No</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>OTR</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((contract) => {
          const isOpen = expandedContractNo === contract.contractNo;

          return (
            <>
              {/* MAIN ROW */}
              <TableRow key={contract.contractNo}>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onToggle(contract.contractNo)}
                  >
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>
                </TableCell>

                <TableCell>{contract.contractNo}</TableCell>
                <TableCell>{contract.clientName}</TableCell>
                <TableCell>
                  {contract.otr.toLocaleString("id-ID")}
                </TableCell>
              </TableRow>

              {/* EXPANDED ROW */}
              {isOpen && (
                <TableRow>
                  <TableCell colSpan={4} className="bg-muted/30 p-4">
                    <InstallmentTable data={contract.installments} />
                  </TableCell>
                </TableRow>
              )}
            </>
          );
        })}
      </TableBody>
    </Table>
  );
}