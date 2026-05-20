import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { authApi } from "./api/auth.api";

export function useMeQuery(enabled = true) {
  return useQuery({
    queryKey: QUERY_KEYS.auth.me,
    queryFn: authApi.me,
    enabled,
  });
}
