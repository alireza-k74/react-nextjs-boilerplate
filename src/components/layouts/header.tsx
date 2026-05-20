"use client";

import { Menu, Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Link } from "@/i18n/navigation";
import { useAuthStore, useUIStore } from "@/stores";
import { Button } from "@/components/ui";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const { theme, setTheme } = useTheme();
  const user = useAuthStore((state) => state.user);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <Menu className="h-4 w-4" />
          </Button>
          <Link href="/" className="text-sm font-semibold">
            {t("common.appName")}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium uppercase">
            {locale}
          </span>
          <span className="text-sm text-muted-foreground">
            {user?.displayName ?? user?.email ?? "Guest"}
          </span>
        </div>
      </div>
    </header>
  );
}
