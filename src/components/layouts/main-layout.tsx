import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}
