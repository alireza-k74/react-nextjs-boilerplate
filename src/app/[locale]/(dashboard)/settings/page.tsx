import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/common";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

export default async function SettingsPage() {
  const t = await getTranslations("nav");

  return (
    <section className="space-y-4">
      <PageHeader title={t("settings")} description="Manage your account preferences." />
      <Card>
        <CardHeader>
          <CardTitle>{t("settings")}</CardTitle>
          <CardDescription>Theme, language and profile preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Extend this page with profile settings, notification controls and security preferences.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
