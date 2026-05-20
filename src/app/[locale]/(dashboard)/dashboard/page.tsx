import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/common";
import { UsersTable } from "@/features/users";

export default async function DashboardPage() {
  const t = await getTranslations("dashboard");

  return (
    <section className="space-y-4">
      <PageHeader title={t("title")} description={t("welcome")} />
      <UsersTable />
    </section>
  );
}
