import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types";
import { mockLogin } from "@/lib/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email, password) => {
        const user = mockLogin(email, password);
        if (user) {
          set({ user, isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: "desaklik-auth" }
  )
);
