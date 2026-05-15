import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  FieldValues,
  Path,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
  type?: string;
  placeholder?: string;
  error?: string;
};

export function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  rules,
  type = "text",
  placeholder,
  error,
}: FormInputProps<T>) {
  return (
    <div className="space-y-1">
      <Label>{label}</Label>

      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}