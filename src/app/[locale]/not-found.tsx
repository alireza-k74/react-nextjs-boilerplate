import { getTranslations } from "next-intl/server";
import { ROUTES } from "@/config";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export default async function LocaleNotFound() {
  const t = await getTranslations("common");

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-semibold">{t("error")}</h2>
      <p className="text-muted-foreground">{t("noResults")}</p>
      <Button asChild>
        <Link href={ROUTES.home}>{t("back")}</Link>
      </Button>
    </div>
  );
}
