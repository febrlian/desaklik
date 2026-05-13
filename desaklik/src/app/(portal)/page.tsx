"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/lib/data/berita";
import {
  FileText,
  Route,
  Map,
  Newspaper,
  Bell,
} from "lucide-react";

const services = [
  { label: "Ajukan Surat", icon: FileText, href: "/surat/ajukan" },
  { label: "Lacak Surat", icon: Route, href: "/lacak" },
  { label: "Peta Desa", icon: Map, href: "/peta" },
  { label: "Berita", icon: Newspaper, href: "/berita" },
];

const SERVICE_CARDS = services.map((s) => (
  <a key={s.label} href={s.href}>
    <Card className="hover:bg-accent transition-colors">
      <CardContent className="p-4 flex flex-col items-center gap-2 text-center">
        <s.icon className="h-6 w-6 text-primary" />
        <span className="text-sm font-medium">{s.label}</span>
      </CardContent>
    </Card>
  </a>
));

export default function PortalHomePage() {
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "Pagi";
    if (hour < 15) return "Siang";
    if (hour < 18) return "Sore";
    return "Malam";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">
            Selamat {greeting()}, Warga!
          </h1>
          <p className="text-sm text-muted-foreground">
            Desa Maju Jaya · Kec. Suka Maju
          </p>
        </div>
        <Button variant="ghost" size="icon" className="relative" aria-label="Notifikasi">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {SERVICE_CARDS}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Pengumuman Terbaru</h2>
          <a href="/berita" className="text-xs text-primary">
            Lihat Semua
          </a>
        </div>
        <div className="space-y-3">
          {mockNews.slice(0, 3).map((n) => (
            <a key={n.id} href={`/berita/${n.slug}`}>
              <Card className="overflow-hidden hover:bg-accent transition-colors">
                <CardContent className="p-3">
                  <p className="text-sm font-medium line-clamp-2">{n.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(n.publishedAt).toLocaleDateString("id-ID")}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
