"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileText,
  Route,
  Newspaper,
  Map,
  Package,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/warga", label: "WargaHub", icon: Users },
  { href: "/surat", label: "SuratInstan", icon: FileText },
  { href: "/jejak", label: "Jejak Surat", icon: Route },
  { href: "/berita", label: "Bale Warta", icon: Newspaper },
  { href: "/peta", label: "Peta Kita", icon: Map },
  { href: "/aset", label: "Aset Desa", icon: Package },
  { href: "/pengaturan", label: "Pengaturan", icon: Settings },
];

export function SidebarNav({ expanded }: { expanded: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 px-2">
      {navItems.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
            title={item.label}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {expanded && <span className="truncate">{item.label}</span>}
          </Link>
        );
      })}
    </nav>
  );
}
