import axios, { type AxiosInstance } from "axios";
import { env } from "@/config/env";
import { setupInterceptors } from "./interceptors";

function createApiClient(): AxiosInstance {
  const client = axios.create({
    baseURL: env.api.baseUrl,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  setupInterceptors(client);
  return client;
}

export const apiClient = createApiClient();
