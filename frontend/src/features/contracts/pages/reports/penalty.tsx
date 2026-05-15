import { useState } from "react";
import { usePenalty } from "@/features/contracts/hooks/use-penalty";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export default function PenaltyReportPage() {
  const [contractNo, setContractNo] = useState("AGR00001");
  const [cutoffDate, setCutoffDate] = useState("2026-08-14");

  const { data, isLoading } = usePenalty(contractNo, cutoffDate);

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-xl font-bold">Penalty Report</h1>

      {/* FILTER */}
      <div className="flex gap-3">
        <input
          className="border p-2 rounded"
          value={contractNo}
          onChange={(e) => setContractNo(e.target.value)}
          placeholder="Contract No"
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={cutoffDate}
          onChange={(e) => setCutoffDate(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Installment No</TableHead>
              <TableHead>Hari Keterlambatan</TableHead>
              <TableHead>Total Denda</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3}>Loading...</TableCell>
              </TableRow>
            ) : (
              data?.map((item: any) => (
                <TableRow key={item.installmentNo}>
                  <TableCell>{item.installmentNo}</TableCell>
                  <TableCell>{item.hariKeterlambatan}</TableCell>
                  <TableCell>{item.totalDenda}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

    </div>
  );
}