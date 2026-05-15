import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { type ContractSchema } from "../schemas/contract.schema";
import { useCreateContract } from "../hooks/use-create-contract";
import { useContractForm } from "../hooks/use-contract-form";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

import { Button } from "@/shared/components/ui/button";
import { FormInput } from "@/shared/components/form-input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";

type Step = "input" | "preview";

export function ContractForm() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCreateContract();
  const { form, calculation } = useContractForm();

  const [step, setStep] = useState<Step>("input");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const values = watch();

  function goPreview() {
    setStep("preview");
  }

  function goBack() {
    setStep("input");
  }

  function openConfirm() {
    setConfirmOpen(true);
  }

  async function handleFinalSubmit() {
    try {
      await mutateAsync(values);

      form.reset();
      setConfirmOpen(false);
      setSuccessOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSuccessClose() {
    setSuccessOpen(false);
    navigate("/list");
  }

  return (
    <>
      <Card className="w-2xl">
        <CardHeader>
          <CardTitle>Create Contract</CardTitle>
        </CardHeader>

        <CardContent>
          {/* ================= INPUT STEP ================= */}
          {step === "input" && (
            <form
              onSubmit={handleSubmit(goPreview)}
              className="space-y-4"
            >
              <FormInput<ContractSchema>
                label="Contract No"
                name="contractNo"
                register={register}
                error={errors.contractNo?.message}
              />

              <FormInput<ContractSchema>
                label="Client Name"
                name="clientName"
                register={register}
                error={errors.clientName?.message}
              />

              <FormInput<ContractSchema>
                label="OTR"
                name="otr"
                type="number"
                register={register}
                rules={{ valueAsNumber: true }}
                error={errors.otr?.message}
              />

              <FormInput<ContractSchema>
                label="DP Percentage"
                name="dpPercentage"
                type="number"
                register={register}
                rules={{ valueAsNumber: true }}
                error={errors.dpPercentage?.message}
              />

              <FormInput<ContractSchema>
                label="Tenor Months"
                name="tenorMonths"
                type="number"
                register={register}
                rules={{ valueAsNumber: true }}
                error={errors.tenorMonths?.message}
              />

              <Button type="submit">
                Preview
              </Button>
            </form>
          )}

          {/* ================= PREVIEW STEP ================= */}
          {step === "preview" && (
            <div className="space-y-4">
              <div className="rounded-lg border p-4 space-y-2">
                <p><b>Contract No:</b> {values.contractNo}</p>
                <p><b>Client Name:</b> {values.clientName}</p>
                <p><b>OTR:</b> {values.otr?.toLocaleString()}</p>
                <p><b>DP %:</b> {values.dpPercentage}</p>
                <p><b>Tenor:</b> {values.tenorMonths} months</p>

                <hr />

                <p><b>DP Amount:</b> {calculation.dpAmount.toLocaleString()}</p>
                <p><b>Loan Amount:</b> {calculation.loanAmount.toLocaleString()}</p>
                <p><b>Monthly Installment:</b> {calculation.monthlyInstallment.toLocaleString()}</p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={goBack}>
                  Back
                </Button>

                <Button onClick={openConfirm}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ================= CONFIRM DIALOG ================= */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Submission</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Are you sure you want to create this contract?
          </p>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setConfirmOpen(false)}
            >
              Cancel
            </Button>

            <Button
              onClick={handleFinalSubmit}
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Yes, Submit"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ================= SUCCESS DIALOG ================= */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success 🎉</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Contract successfully created
          </p>

          <Button
            className="w-full mt-4"
            onClick={handleSuccessClose}
          >
            Go to Contract List
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}