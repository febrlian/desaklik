"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Dynamically import map component with no ssr
const MapViewer = dynamic(() => import("@/components/peta/map-viewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] rounded-xl border bg-muted flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="text-sm text-muted-foreground">Memuat Peta...</p>
      </div>
    </div>
  ),
});

export default function PetaKitaPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild className="-ml-2">
          <Link href="/">
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Kembali</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-xl font-bold">Peta Kita</h1>
          <p className="text-sm text-muted-foreground">Sistem Informasi Geografis Desa</p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Informasi Peta
          </CardTitle>
          <CardDescription>
            Peta ini menampilkan batas desa dan letak persil tanah beserta informasi data rumah tangga.
            Ketuk pada penanda merah untuk melihat detail properti.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MapViewer />
        </CardContent>
      </Card>
    </div>
  );
}
