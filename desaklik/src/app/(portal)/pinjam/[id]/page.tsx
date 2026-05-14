"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { mockBorrowRequests } from "@/lib/data/aset";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PortalPinjamDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const req = useMemo(() => mockBorrowRequests.find((r) => r.id === id), [id]);

  if (!req) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        Data peminjaman tidak ditemukan
      </div>
    );
  }

  const statusColor =
    req.status === "Disetujui"
      ? "bg-success/10 text-success"
      : req.status === "Ditolak"
      ? "bg-destructive/10 text-destructive"
      : "bg-warning/10 text-warning";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild aria-label="Kembali ke daftar aset">
          <a href="/aset">
            <ArrowLeft className="h-5 w-5" />
          </a>
        </Button>
        <h2 className="text-lg font-semibold">Detail Peminjaman</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{req.assetName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status</span>
            <Badge variant="secondary" className={statusColor}>
              {req.status}
            </Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Peminjam</span>
            <span className="font-medium">{req.citizenName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tanggal Mulai</span>
            <span className="font-medium">
              {new Date(req.startDate).toLocaleDateString("id-ID")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tanggal Selesai</span>
            <span className="font-medium">
              {new Date(req.endDate).toLocaleDateString("id-ID")}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Tujuan</span>
            <p className="font-medium">{req.purpose}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
