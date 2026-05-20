import type { LoginCredentials, User } from "@/types";
import { apiClient, type ApiResponse } from "@/lib/api";

interface LoginResponse {
  token: string;
  user: User;
}

export const authService = {
  async login(payload: LoginCredentials): Promise<LoginResponse> {
    const response = await apiClient.post<ApiResponse<LoginResponse>>("/auth/login", payload);
    return response.data.data;
  },

  async me(): Promise<User> {
    const response = await apiClient.get<ApiResponse<User>>("/auth/me");
    return response.data.data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/auth/logout");
  },
};
