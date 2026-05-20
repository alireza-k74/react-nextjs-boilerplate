import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

interface FormCheckboxProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  description?: string;
  disabled?: boolean;
}

export function FormCheckbox<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  disabled,
}: FormCheckboxProps<TFieldValues>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-input"
            checked={Boolean(field.value)}
            onChange={(event) => field.onChange(event.target.checked)}
            onBlur={field.onBlur}
            disabled={disabled}
          />
          <div className="space-y-1">
            <span className="text-sm font-medium">{label}</span>
            {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
            {fieldState.error?.message ? (
              <p role="alert" className="text-sm text-destructive">
                {fieldState.error.message}
              </p>
            ) : null}
          </div>
        </label>
      )}
    />
  );
}
