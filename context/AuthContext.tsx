"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { User } from "@/lib/types";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("apex_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("apex_user");
      }
    }
  }, []);

  const login = useCallback((email: string, _password: string): boolean => {
    const storedUsers = JSON.parse(
      localStorage.getItem("apex_users") || "[]"
    ) as Array<User & { password: string }>;
    const found = storedUsers.find(
      (u: User & { password: string }) =>
        u.email === email && u.password === _password
    );
    if (found) {
      const { password: _, ...userData } = found;
      void _;
      setUser(userData);
      localStorage.setItem("apex_user", JSON.stringify(userData));
      return true;
    }
    return false;
  }, []);

  const register = useCallback(
    (name: string, email: string, phone: string, password: string): boolean => {
      const storedUsers = JSON.parse(
        localStorage.getItem("apex_users") || "[]"
      ) as Array<User & { password: string }>;
      if (storedUsers.some((u: User & { password: string }) => u.email === email)) {
        return false;
      }
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        phone,
      };
      storedUsers.push({ ...newUser, password });
      localStorage.setItem("apex_users", JSON.stringify(storedUsers));
      setUser(newUser);
      localStorage.setItem("apex_user", JSON.stringify(newUser));
      return true;
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("apex_user");
  }, []);

  if (!mounted) {
    return (
      <AuthContext.Provider
        value={{ user: null, isAuthenticated: false, login, register, logout }}
      >
        {children}
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
