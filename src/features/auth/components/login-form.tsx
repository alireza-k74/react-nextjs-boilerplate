"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { FormInput } from "@/components/forms";
import { Button } from "@/components/ui";
import { useLogin } from "../hooks/use-login";
import { loginSchema, type LoginSchema } from "../schemas/login.schema";

export function LoginForm() {
  const t = useTranslations("auth");
  const loginMutation = useLogin();
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginSchema) => {
    loginMutation.mutate(values);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        control={control}
        name="email"
        label={t("email")}
        type="email"
        placeholder="name@company.com"
      />
      <FormInput control={control} name="password" label={t("password")} type="password" />
      <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "..." : t("loginButton")}
      </Button>
      {loginMutation.error ? (
        <p className="text-sm text-destructive">
          {(loginMutation.error as { message?: string }).message}
        </p>
      ) : null}
    </form>
  );
}
