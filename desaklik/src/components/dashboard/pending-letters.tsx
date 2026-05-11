import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockLetters } from "@/lib/data/surat";
import { LetterStatus } from "@/types";

const statusColor: Record<LetterStatus, string> = {
  Diajukan: "bg-info/10 text-info",
  Diproses: "bg-warning/10 text-warning",
  "Menunggu TTD": "bg-secondary text-secondary-foreground",
  Selesai: "bg-success/10 text-success",
  Ditolak: "bg-destructive/10 text-destructive",
};

export function PendingLetters() {
  const pending = mockLetters.filter((l) => l.status !== "Selesai").slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Surat Menunggu</CardTitle>
        <Button variant="ghost" size="sm" className="text-xs" asChild>
          <a href="/jejak">Lihat Semua</a>
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {pending.map((l) => (
          <div
            key={l.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{l.citizenName}</p>
              <p className="text-xs text-muted-foreground">
                {l.type} · {l.purpose.slice(0, 40)}
                {l.purpose.length > 40 ? "..." : ""}
              </p>
            </div>
            <Badge variant="secondary" className={statusColor[l.status]}>
              {l.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
