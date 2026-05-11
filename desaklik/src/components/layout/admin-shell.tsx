"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import { useAuthStore } from "@/stores/auth-store";
import { SidebarNav } from "./sidebar-nav";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PanelLeftClose,
  PanelLeftOpen,
  Bell,
  LogOut,
  User,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const { expanded, toggle } = useSidebarStore();
  const { user, logout } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [notifOpen, setNotifOpen] = useState(false);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "Pagi";
    if (hour < 15) return "Siang";
    if (hour < 18) return "Sore";
    return "Malam";
  };

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col border-r bg-sidebar transition-all duration-300",
          expanded ? "w-60" : "w-16"
        )}
      >
        <div className="flex h-14 items-center gap-2 px-3 border-b">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
            DK
          </div>
          {expanded && (
            <span className="font-semibold text-sm truncate">DesaKlik</span>
          )}
        </div>
        <div className="flex-1 py-3 overflow-y-auto">
          <SidebarNav expanded={expanded} />
        </div>
        <div className="border-t p-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2"
            onClick={toggle}
          >
            {expanded ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
            )}
            {expanded && <span className="text-xs">Ciutkan</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-14 border-b bg-card flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-medium text-muted-foreground hidden md:block">
              {greeting()}, {user?.name ?? "Pak Lurah"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setNotifOpen(!notifOpen)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                      {user?.name?.slice(0, 2).toUpperCase() ?? "AD"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/pengaturan" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto pb-20 md:pb-6">
          {children}
        </main>

        {/* Mobile Bottom Nav */}
        <MobileBottomNav />
      </div>
    </div>
  );
}
