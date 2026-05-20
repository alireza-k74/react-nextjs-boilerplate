"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { ROUTES } from "@/config";
import { useAuthStore } from "@/stores";

export function useAuth() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);
  const setLoading = useAuthStore((state) => state.setLoading);
  const logoutStore = useAuthStore((state) => state.logout);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    const handler = () => {
      logoutStore();
      router.push(ROUTES.login);
    };

    window.addEventListener("auth:unauthorized", handler);
    return () => window.removeEventListener("auth:unauthorized", handler);
  }, [logoutStore, router]);

  const login = (nextToken: string, nextUser: NonNullable<typeof user>) => {
    setToken(nextToken);
    setUser(nextUser);
  };

  const logout = () => {
    logoutStore();
    router.push(ROUTES.login);
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
}
