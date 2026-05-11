"use client";

import { MapPin } from "lucide-react";

interface MapPlaceholderProps {
  height?: string;
}

export function MapPlaceholder({ height = "h-96" }: MapPlaceholderProps) {
  return (
    <div
      className={`relative w-full ${height} rounded-xl border bg-muted flex flex-col items-center justify-center gap-3 overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <MapPin className="h-10 w-10 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">Peta Desa (Placeholder)</p>
      <p className="text-xs text-muted-foreground">
        Modul GIS akan diintegrasikan pada fase berikutnya
      </p>
    </div>
  );
}
