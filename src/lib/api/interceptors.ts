import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { env } from "@/config/env";
import type { ApiErrorResponse } from "./types";

function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(env.auth.cookieName);
}

export function setupInterceptors(client: AxiosInstance): void {
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  client.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<ApiErrorResponse>) => {
      const status = error.response?.status;

      if (status === 401 && typeof window !== "undefined") {
        localStorage.removeItem(env.auth.cookieName);
        window.dispatchEvent(new CustomEvent("auth:unauthorized"));
      }

      const message =
        error.response?.data?.message ?? error.message ?? "An unexpected error occurred";

      return Promise.reject({
        status,
        message,
        code: error.response?.data?.code,
        errors: error.response?.data?.errors,
        original: error,
      });
    },
  );
}
