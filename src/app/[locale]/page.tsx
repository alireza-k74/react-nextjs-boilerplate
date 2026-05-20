import { getTranslations } from "next-intl/server";
import { ROUTES } from "@/config";
import { Link } from "@/i18n/navigation";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center px-4 py-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href={ROUTES.dashboard}>{t("cta")}</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
