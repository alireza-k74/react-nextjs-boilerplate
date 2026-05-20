"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@/i18n/navigation";
import { ROUTES, env } from "@/config";
import { useAuthStore } from "@/stores";
import type { LoginCredentials } from "@/types";
import { authApi } from "../api/auth.api";

export function useLogin() {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: (payload: LoginCredentials) => authApi.login(payload),
    onSuccess: ({ token, user }) => {
      setToken(token);
      setUser(user);
      localStorage.setItem(env.auth.cookieName, token);
      router.push(ROUTES.dashboard);
    },
  });
}
