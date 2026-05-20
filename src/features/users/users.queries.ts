import { useQuery } from "@tanstack/react-query";
import type { PaginationParams } from "@/lib/api";
import { QUERY_KEYS } from "@/constants";
import { usersApi } from "./api/users.api";

export function useUsersQuery(params?: PaginationParams) {
  return useQuery({
    queryKey: QUERY_KEYS.users.list(params as Record<string, unknown> | undefined),
    queryFn: () => usersApi.list(params),
  });
}
