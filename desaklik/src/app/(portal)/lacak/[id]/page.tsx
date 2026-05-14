"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchLetterById } from "@/lib/api-client";
import { LetterStatusBadge } from "@/components/jejak/letter-status-badge";
import { TimelineTracker } from "@/components/jejak/timeline-tracker";
import { QRCodeDisplay } from "@/components/surat/qr-code-display";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function PortalLacakDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["letter", id],
    queryFn: () => fetchLetterById(id),
  });

  const letter = data?.data;

  const handleCopyLink = () => {
    if (letter?.verificationToken) {
      const url = `${window.location.origin}/verifikasi?token=${letter.verificationToken}`;
      navigator.clipboard.writeText(url);
      toast.success("Link verifikasi disalin!");
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Detail Surat</h2>
        <p className="text-sm text-muted-foreground">Memuat detail surat...</p>
      </div>
    );
  }

  if (error || !letter) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Detail Surat</h2>
        <p className="text-sm text-destructive">Surat tidak ditemukan.</p>
        <Link href="/lacak">
          <Button variant="outline" size="sm">
            Kembali
          </Button>
        </Link>
      </div>
    );
  }

  const verificationUrl = letter.verificationToken
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/verifikasi?token=${letter.verificationToken}`
    : "";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Detail Surat</h2>
        <Link href="/lacak">
          <Button variant="outline" size="sm">
            Kembali
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs">{letter.id}</span>
            <LetterStatusBadge status={letter.status} />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Jenis Surat</p>
            <p className="font-medium">{letter.type}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Pemohon</p>
            <p className="font-medium">{letter.citizenName}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Tujuan</p>
            <p className="font-medium">{letter.purpose}</p>
          </div>
          {letter.notes && (
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Catatan</p>
              <p className="font-medium">{letter.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {letter.qrCodeUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Verifikasi QR</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <QRCodeDisplay qrCodeUrl={letter.qrCodeUrl} size="md" />
            </div>
            <div className="space-y-2">
              <Label>Link Verifikasi</Label>
              <div className="flex gap-2">
                <Input value={verificationUrl} readOnly className="text-xs" />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyLink}
                  title="Salin link"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {letter.pdfUrl && (
        <Card>
          <CardContent className="p-4">
            <a
              href={letter.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Unduh PDF Surat
            </a>
          </CardContent>
        </Card>
      )}

      {letter.timelines && letter.timelines.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Riwayat Status</CardTitle>
          </CardHeader>
          <CardContent>
            <TimelineTracker items={letter.timelines} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
