import { useState } from "react";
import { useTotalAngsuran } from "@/features/contracts/hooks/use-total-angsuran";

export default function TotalInstallmentReportPage() {
  const [contractNo, setContractNo] = useState("AGR00001");
  const [cutoffDate, setCutoffDate] = useState("2026-08-14");

  const { data, isLoading } = useTotalAngsuran(contractNo, cutoffDate);

  return (
    <div className="p-6 space-y-4">

      <h1 className="text-xl font-bold">
        Total Installment Report
      </h1>

      {/* FILTER */}
      <div className="flex gap-3">
        <input
          className="border p-2"
          value={contractNo}
          onChange={(e) => setContractNo(e.target.value)}
          placeholder="Contract No"
        />

        <input
          type="date"
          className="border p-2"
          value={cutoffDate}
          onChange={(e) => setCutoffDate(e.target.value)}
        />
      </div>

      {/* RESULT */}
      <div className="border rounded p-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="text-gray-500">Contract No</p>
            <p className="font-semibold">{data?.contractNo}</p>

            <p className="text-gray-500 mt-2">Client</p>
            <p className="font-semibold">{data?.clientName}</p>

            <p className="text-gray-500 mt-2">Total Angsuran Jatuh Tempo</p>
            <p className="font-bold text-lg">
              {data?.totalAngsuranJatuhTempo}
            </p>
          </>
        )}
      </div>

    </div>
  );
}