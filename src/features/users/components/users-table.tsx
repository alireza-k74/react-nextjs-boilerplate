"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import type { User } from "@/types";
import { DataTable } from "@/components/data-table";
import { useUsers } from "../hooks/use-users";

export function UsersTable() {
  const { users } = useUsers();

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => row.original.email,
      },
      {
        accessorKey: "displayName",
        header: "Name",
        cell: ({ row }) => row.original.displayName ?? "-",
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => row.original.role ?? "user",
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={users} />;
}
