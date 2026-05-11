"use client";

import { LetterStatus } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusStyles: Record<LetterStatus, string> = {
  Diajukan: "bg-info/10 text-info hover:bg-info/20",
  Diproses: "bg-warning/10 text-warning hover:bg-warning/20",
  "Menunggu TTD": "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  Selesai: "bg-success/10 text-success hover:bg-success/20",
  Ditolak: "bg-destructive/10 text-destructive hover:bg-destructive/20",
};

export function LetterStatusBadge({ status }: { status: LetterStatus }) {
  return (
    <Badge variant="secondary" className={cn(statusStyles[status])}>
      {status}
    </Badge>
  );
}
