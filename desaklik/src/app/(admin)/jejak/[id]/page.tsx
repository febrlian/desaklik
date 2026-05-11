"use client";

import { useParams } from "next/navigation";
import { mockLetters, mockTimelines } from "@/lib/data/surat";
import { LetterStatusBadge } from "@/components/jejak/letter-status-badge";
import { TimelineTracker } from "@/components/jejak/timeline-tracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";

export default function JejakDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const letter = mockLetters.find((l) => l.id === id);
  const timeline = mockTimelines[id] ?? [];

  if (!letter) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        Surat tidak ditemukan
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <a href="/jejak">
            <ArrowLeft className="h-5 w-5" />
          </a>
        </Button>
        <h2 className="text-xl font-semibold">Detail Surat</h2>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">{letter.type}</CardTitle>
          <LetterStatusBadge status={letter.status} />
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Nomor Surat</p>
              <p className="font-medium">{letter.id}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Tanggal Diajukan</p>
              <p className="font-medium">
                {new Date(letter.createdAt).toLocaleDateString("id-ID")}
              </p>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">Pemohon</p>
            <p className="font-medium">{letter.citizenName}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Tujuan</p>
            <p className="font-medium">{letter.purpose}</p>
          </div>
          {letter.notes && (
            <div>
              <p className="text-muted-foreground">Catatan</p>
              <p className="font-medium">{letter.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Riwayat Status</CardTitle>
        </CardHeader>
        <CardContent>
          {timeline.length > 0 ? (
            <TimelineTracker items={timeline} />
          ) : (
            <p className="text-sm text-muted-foreground">
              Belum ada riwayat status
            </p>
          )}
        </CardContent>
      </Card>

      {letter.status === "Selesai" && (
        <Button className="w-full" onClick={() => window.print()}>
          <Printer className="h-4 w-4 mr-2" />
          Cetak Surat
        </Button>
      )}
    </div>
  );
}
