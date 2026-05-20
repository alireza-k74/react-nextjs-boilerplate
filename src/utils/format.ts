export function formatDate(
  date: Date | string | number,
  locale = "en",
  options?: Intl.DateTimeFormatOptions,
): string {
  const value = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat(locale, options).format(value);
}

export function formatNumber(value: number, locale = "en"): string {
  return new Intl.NumberFormat(locale).format(value);
}
