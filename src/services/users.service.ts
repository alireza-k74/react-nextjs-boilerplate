import { apiClient, type PaginatedResponse, type PaginationParams } from "@/lib/api";
import type { User } from "@/types";

export const usersService = {
  async list(params?: PaginationParams): Promise<PaginatedResponse<User>> {
    const response = await apiClient.get<PaginatedResponse<User>>("/users", { params });
    return response.data;
  },
};
