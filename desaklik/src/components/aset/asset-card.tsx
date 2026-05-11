"use client";

import { Asset } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface AssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: AssetCardProps) {
  const statusColor =
    asset.status === "Tersedia"
      ? "bg-success/10 text-success"
      : asset.status === "Dipinjam"
      ? "bg-warning/10 text-warning"
      : "bg-destructive/10 text-destructive";

  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-muted flex items-center justify-center text-muted-foreground text-sm">
        IMG
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-sm">{asset.name}</h3>
          <Badge variant="secondary" className={statusColor}>
            {asset.status}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{asset.category}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="truncate">{asset.location}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Kondisi: {asset.condition}
        </p>
      </CardContent>
    </Card>
  );
}
