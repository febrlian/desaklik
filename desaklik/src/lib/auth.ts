import { User, UserRole } from "@/types";

const MOCK_USERS: User[] = [
  {
    id: "U001",
    name: "Pak Lurah",
    email: "lurah@desaklik.id",
    role: "admin",
    tenantId: "T001",
  },
  {
    id: "U002",
    name: "Bu Sekdes",
    email: "sekdes@desaklik.id",
    role: "operator",
    tenantId: "T001",
  },
  {
    id: "U003",
    name: "Ahmad Sudirman",
    email: "ahmad@warga.id",
    role: "citizen",
    tenantId: "T001",
  },
];

export function mockLogin(
  email: string,
  password: string
): User | null {
  if (password !== "password") return null;
  return MOCK_USERS.find((u) => u.email === email) ?? null;
}

export function hasRole(user: User | null, roles: UserRole[]): boolean {
  if (!user) return false;
  return roles.includes(user.role);
}

export function isAdmin(user: User | null): boolean {
  return user?.role === "admin";
}

export function isOperator(user: User | null): boolean {
  return user?.role === "operator";
}

export function isCitizen(user: User | null): boolean {
  return user?.role === "citizen";
}
