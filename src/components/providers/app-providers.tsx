"use client";

import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/modals";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
        <ModalProvider />
        <Toaster richColors />
      </QueryProvider>
    </ThemeProvider>
  );
}
