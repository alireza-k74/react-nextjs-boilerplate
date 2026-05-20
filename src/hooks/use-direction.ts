"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import { isRtlLocale } from "@/config";

export function useDirection() {
  const locale = useLocale();

  return useMemo(
    () => ({
      locale,
      direction: isRtlLocale(locale) ? "rtl" : "ltr",
      isRtl: isRtlLocale(locale),
    }),
    [locale],
  );
}
