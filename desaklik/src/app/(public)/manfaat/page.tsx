import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Hemat Waktu",
    desc: "Proses administrasi yang biasanya memakan hari kini selesai dalam menit.",
  },
  {
    icon: ShieldCheck,
    title: "Data Aman",
    desc: "Sistem keamanan berlapis untuk melindungi data sensitif desa.",
  },
  {
    icon: Smartphone,
    title: "Akses Mobile",
    desc: "Warga dapat mengakses layanan kapan saja dari perangkat mobile.",
  },
  {
    icon: TrendingUp,
    title: "Transparansi",
    desc: "Setiap proses tercatat dan dapat dilacak secara terbuka.",
  },
  {
    icon: Users,
    title: "Keterlibatan Warga",
    desc: "Warga lebih mudah berpartisipasi dalam kegiatan desa.",
  },
  {
    icon: Wallet,
    title: "Efisiensi Anggaran",
    desc: "Kurangi biaya operasional administrasi dengan digitalisasi.",
  },
];

export default function ManfaatPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">Manfaat DesaKlik</h1>
          <p className="text-muted-foreground">
            Transformasi digital yang membawa dampak nyata bagi desa
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardContent className="p-6 space-y-3">
                <b.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <Button size="lg" asChild>
          <a href="/login">Mulai Transformasi</a>
        </Button>
      </section>

      <footer className="border-t py-8 px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} DesaKlik. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
