"use client";

import { Citizen } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone } from "lucide-react";

interface CitizenCardProps {
  citizen: Citizen;
}

export function CitizenCard({ citizen }: CitizenCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-sm">{citizen.name}</h3>
            <p className="text-xs text-muted-foreground font-mono">{citizen.nik}</p>
          </div>
          <Badge
            variant="secondary"
            className={
              citizen.status === "Aktif"
                ? "bg-success/10 text-success"
                : ""
            }
          >
            {citizen.status}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="truncate">
            {citizen.address} · RT {citizen.rt}/RW {citizen.rw}
          </span>
        </div>
        {citizen.phone && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>{citizen.phone}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
