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

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/warga", label: "Warga", icon: Users },
  { href: "/surat", label: "Surat", icon: FileText },
  { href: "/jejak", label: "Jejak", icon: Route },
  { href: "/berita", label: "Berita", icon: Newspaper },
  { href: "/peta", label: "Peta", icon: Map },
  { href: "/aset", label: "Aset", icon: Package },
  { href: "/pengaturan", label: "Setelan", icon: Settings },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-card border-t z-50 flex items-center justify-around px-1">
      {items.slice(0, 5).map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center gap-0.5 w-14 h-12 rounded-lg transition-colors",
              active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
