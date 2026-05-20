"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { ErrorState } from "@/components/common";

interface LocaleErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function LocaleError({ error, unstable_retry }: LocaleErrorProps) {
  const t = useTranslations("common");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorState title={t("error")} description={error.message} onRetry={unstable_retry} />;
}
