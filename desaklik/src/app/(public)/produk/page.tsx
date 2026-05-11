import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Users,
  Map,
  Newspaper,
  Package,
  Route,
  Settings,
} from "lucide-react";

const products = [
  {
    icon: Users,
    title: "WargaHub",
    desc: "Manajemen data warga lengkap dengan pencarian, filter, dan pelacakan status kependudukan.",
  },
  {
    icon: FileText,
    title: "SuratInstan",
    desc: "Wizard pembuatan surat otomatis dengan template yang dapat disesuaikan.",
  },
  {
    icon: Route,
    title: "Jejak Surat",
    desc: "Pantau status pengajuan surat secara real-time dengan timeline tracker.",
  },
  {
    icon: Newspaper,
    title: "Bale Warta",
    desc: "Portal berita desa untuk menyebarkan informasi kepada seluruh warga.",
  },
  {
    icon: Map,
    title: "Peta Kita",
    desc: "Pemetaan digital bidang tanah, aset, dan infrastruktur desa.",
  },
  {
    icon: Package,
    title: "Aset Desa",
    desc: "Inventarisasi dan peminjaman aset desa secara terstruktur.",
  },
  {
    icon: Settings,
    title: "Pengaturan",
    desc: "Konfigurasi desa, template surat, tema, dan preferensi notifikasi.",
  },
];

export default function ProdukPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">Produk DesaKlik</h1>
          <p className="text-muted-foreground">
            Solusi lengkap untuk administrasi desa modern
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <Card key={p.title}>
              <CardContent className="p-6 space-y-3">
                <p.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <Button size="lg" asChild>
          <a href="/login">Coba Gratis</a>
        </Button>
      </section>

      <footer className="border-t py-8 px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} DesaKlik. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
