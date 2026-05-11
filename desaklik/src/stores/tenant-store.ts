import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Tenant } from "@/types";

const DEFAULT_TENANT: Tenant = {
  id: "T001",
  name: "Desa Maju Jaya",
  slug: "maju-jaya",
  region: "Jawa Barat",
  district: "Kecamatan Suka Maju",
  village: "Desa Maju Jaya",
  theme: "system",
};

interface TenantState {
  tenant: Tenant;
  setTenant: (tenant: Tenant) => void;
  setTheme: (theme: Tenant["theme"]) => void;
}

export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenant: DEFAULT_TENANT,
      setTenant: (tenant) => set({ tenant }),
      setTheme: (theme) =>
        set((state) => ({ tenant: { ...state.tenant, theme } })),
    }),
    { name: "desaklik-tenant" }
  )
);
