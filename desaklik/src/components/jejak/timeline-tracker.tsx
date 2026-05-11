"use client";

import { LetterTimeline } from "@/types";
import { cn } from "@/lib/utils";

interface TimelineTrackerProps {
  items: LetterTimeline[];
}

export function TimelineTracker({ items }: TimelineTrackerProps) {
  return (
    <div className="relative pl-6 space-y-6">
      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />
      {items.map((item, idx) => (
        <div key={item.id} className="relative">
          <div
            className={cn(
              "absolute -left-6 top-1 h-3 w-3 rounded-full border-2",
              idx === 0
                ? "bg-primary border-primary"
                : "bg-background border-muted-foreground"
            )}
          />
          <div className="space-y-1">
            <p className="text-sm font-medium">{item.status}</p>
            <p className="text-xs text-muted-foreground">
              {item.actor} ·{" "}
              {new Date(item.timestamp).toLocaleString("id-ID")}
            </p>
            {item.note && (
              <p className="text-xs text-muted-foreground">{item.note}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
