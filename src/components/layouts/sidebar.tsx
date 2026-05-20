"use client";

import { Home, LayoutDashboard, Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ROUTES } from "@/config";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/stores";

const items = [
  { href: ROUTES.home, icon: Home, key: "nav.home" },
  { href: ROUTES.dashboard, icon: LayoutDashboard, key: "nav.dashboard" },
  { href: ROUTES.settings, icon: Settings, key: "nav.settings" },
] as const;

export function Sidebar() {
  const t = useTranslations();
  const pathname = usePathname();
  const sidebarOpen = useUIStore((state) => state.sidebarOpen);

  return (
    <aside
      className={cn(
        "hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 border-e bg-muted/20 p-3 md:block",
        !sidebarOpen && "md:w-16",
      )}
    >
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                isActive && "bg-accent text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {sidebarOpen ? <span>{t(item.key)}</span> : null}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
