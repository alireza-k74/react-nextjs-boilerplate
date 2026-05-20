import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { User } from "@/types";

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: true,
        setUser: (user) => set({ user, isAuthenticated: Boolean(user) }),
        setToken: (token) => set({ token, isAuthenticated: Boolean(token) }),
        setLoading: (isLoading) => set({ isLoading }),
        logout: () => set({ user: null, token: null, isAuthenticated: false }),
      }),
      { name: "auth-store", partialize: (state) => ({ token: state.token, user: state.user }) },
    ),
    { name: "AuthStore" },
  ),
);
