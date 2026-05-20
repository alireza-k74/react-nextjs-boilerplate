import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";
import type { SelectOption } from "@/types";
import { FormField } from "./form-field";

interface FormSelectProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  hint?: string;
  options: SelectOption[];
  disabled?: boolean;
}

export function FormSelect<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder = "Select an option",
  hint,
  options,
  disabled,
}: FormSelectProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField label={label} htmlFor={field.name} error={fieldState.error?.message} hint={hint}>
          <select
            id={field.name}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            disabled={disabled}
            value={String(field.value ?? "")}
            onBlur={field.onBlur}
            onChange={(event) => field.onChange(event.target.value)}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                key={String(option.value)}
                value={String(option.value)}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        </FormField>
      )}
    />
  );
}
