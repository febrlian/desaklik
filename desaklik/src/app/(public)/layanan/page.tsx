import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Route, Map, Newspaper, Phone } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Pembuatan Surat",
    desc: "Surat keterangan usaha, domisili, pengantar, tidak mampu, kelahiran, dan kematian.",
  },
  {
    icon: Route,
    title: "Pelacakan Surat",
    desc: "Pantau status surat yang sedang diproses secara transparan.",
  },
  {
    icon: Map,
    title: "Informasi Tanah",
    desc: "Akses data bidang tanah dan pemetaan desa.",
  },
  {
    icon: Newspaper,
    title: "Pengumuman Desa",
    desc: "Dapatkan informasi terbaru dari pemerintah desa.",
  },
  {
    icon: Phone,
    title: "Layanan Darurat",
    desc: "Akses kontak penting dan layanan darurat desa.",
  },
];

export default function LayananPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">Layanan DesaKlik</h1>
          <p className="text-muted-foreground">
            Layanan publik yang dapat diakses oleh seluruh warga desa
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <Button size="lg" asChild>
          <a href="/login">Akses Layanan</a>
        </Button>
      </section>

      <footer className="border-t py-8 px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} DesaKlik. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
