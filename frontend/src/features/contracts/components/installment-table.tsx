// src/features/contracts/components/installment-table.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

import { Badge } from "@/shared/components/ui/badge";
import { Installment } from "../types/contract.type";

type Props = {
  data: Installment[];
};

export function InstallmentTable({ data }: Props) {
  const formatIDR = (value: number) =>
    value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

  const isOverdue = (item: Installment) => {
    const today = new Date();
    return !item.isPaid && new Date(item.dueDate) <= today;
  };

  return (
    <div className="rounded-lg border bg-background shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead className="w-[80px]">No</TableHead>
            <TableHead>Installment</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => {
            const overdue = isOverdue(item);

            return (
              <TableRow
                key={item.id}
                className={`
                  hover:bg-muted/30 transition
                  ${item.isPaid ? "opacity-70" : ""}
                  ${overdue ? "bg-red-50 hover:bg-red-100" : ""}
                `}
              >
                <TableCell className="py-3">
                  {item.installmentNo}
                </TableCell>

                <TableCell className="py-3">
                  #{item.installmentNo}
                </TableCell>

                <TableCell className="py-3 font-medium">
                  {formatIDR(item.amount)}
                </TableCell>

                <TableCell className="py-3">
                  {formatDate(item.dueDate)}
                </TableCell>

                <TableCell className="py-3">
                  {item.isPaid ? (
                    <Badge className="bg-emerald-500 hover:bg-emerald-500">
                      PAID
                    </Badge>
                  ) : overdue ? (
                    <Badge className="bg-red-500 hover:bg-red-500">
                      OVERDUE
                    </Badge>
                  ) : (
                    <Badge className="bg-orange-400 hover:bg-orange-400">
                      UNPAID
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}