import { getTranslations } from "next-intl/server";
import { AuthLayout } from "@/components/layouts";
import { LoginForm } from "@/features/auth";

export default async function LoginPage() {
  const t = await getTranslations("auth");

  return (
    <AuthLayout title={t("loginTitle")} description={t("noAccount")}>
      <LoginForm />
    </AuthLayout>
  );
}
