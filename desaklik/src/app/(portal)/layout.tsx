import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 p-4 pb-20 overflow-y-auto">{children}</main>
      <MobileBottomNav />
    </div>
  );
}
