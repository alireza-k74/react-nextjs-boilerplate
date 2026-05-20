import * as React from "react";
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";
import { Input } from "@/components/ui";
import { FormField } from "./form-field";

interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  placeholder?: string;
  type?: React.ComponentProps<typeof Input>["type"];
  hint?: string;
  disabled?: boolean;
}

export function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  hint,
  disabled,
}: FormInputProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormField label={label} htmlFor={field.name} error={fieldState.error?.message} hint={hint}>
          <Input
            id={field.name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            {...field}
          />
        </FormField>
      )}
    />
  );
}
