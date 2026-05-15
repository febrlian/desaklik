import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black p-4">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center space-y-8 bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            DesaKlik
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Portal warga dan sistem administrasi desa digital terpadu.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-sm gap-4">
          <Link href="/portal" className="w-full">
            <Button size="lg" className="w-full">
              Masuk Portal Warga
            </Button>
          </Link>
          <Link href="/berita" className="w-full">
            <Button variant="outline" size="lg" className="w-full">
              Bale Warta (Berita Desa)
            </Button>
          </Link>
          <Link href="/verifikasi" className="w-full">
            <Button variant="outline" size="lg" className="w-full">
              Cek Keaslian Surat
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
