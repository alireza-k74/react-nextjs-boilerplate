import { useUsersQuery } from "../users.queries";

export function useUsers() {
  const query = useUsersQuery();

  return {
    users: query.data?.data ?? [],
    pagination: query.data?.meta,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
}
