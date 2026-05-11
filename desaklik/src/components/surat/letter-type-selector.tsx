"use client";

import { LetterType } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FileText, Home, Route, Heart, Baby, Skull } from "lucide-react";

const types: { type: LetterType; label: string; icon: React.ElementType }[] = [
  { type: "SKUsaha", label: "Surat Keterangan Usaha", icon: FileText },
  { type: "Domisili", label: "Surat Keterangan Domisili", icon: Home },
  { type: "Pengantar", label: "Surat Pengantar", icon: Route },
  { type: "Tidak Mampu", label: "Surat Tidak Mampu", icon: Heart },
  { type: "Kelahiran", label: "Surat Kelahiran", icon: Baby },
  { type: "Kematian", label: "Surat Kematian", icon: Skull },
];

interface LetterTypeSelectorProps {
  value: LetterType | null;
  onChange: (type: LetterType) => void;
}

export function LetterTypeSelector({ value, onChange }: LetterTypeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {types.map((t) => (
        <Card
          key={t.type}
          className={cn(
            "cursor-pointer transition-colors hover:border-primary",
            value === t.type && "border-primary bg-primary/5"
          )}
          onClick={() => onChange(t.type)}
        >
          <CardContent className="p-4 flex flex-col items-center gap-2 text-center">
            <t.icon className="h-6 w-6 text-muted-foreground" />
            <span className="text-sm font-medium">{t.label}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
