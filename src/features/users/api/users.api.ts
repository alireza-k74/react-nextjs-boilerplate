import type { PaginationParams } from "@/lib/api";
import { usersService } from "@/services";

export const usersApi = {
  list(params?: PaginationParams) {
    return usersService.list(params);
  },
};
