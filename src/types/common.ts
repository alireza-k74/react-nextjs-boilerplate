export type Direction = "ltr" | "rtl";

export type ThemeMode = "light" | "dark" | "system";

export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;
