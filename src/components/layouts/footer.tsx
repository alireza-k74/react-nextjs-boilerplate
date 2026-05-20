import { siteConfig } from "@/config";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 text-xs text-muted-foreground">
        <span>{siteConfig.name}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
