import type { LoginCredentials, User } from "@/types";
import { authService } from "@/services";

export const authApi = {
  login(credentials: LoginCredentials) {
    return authService.login(credentials);
  },
  me(): Promise<User> {
    return authService.me();
  },
  logout(): Promise<void> {
    return authService.logout();
  },
};
