"use client";

import { useState, useMemo } from "react";
import { Citizen } from "@/types";
import { mockCitizens } from "@/lib/data/warga";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface CitizenSearchFieldProps {
  value: Citizen | null;
  onChange: (citizen: Citizen) => void;
}

export function CitizenSearchField({ value, onChange }: CitizenSearchFieldProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    if (!query) return [];
    return mockCitizens.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.nik.includes(query)
    );
  }, [query]);

  return (
    <div className="relative">
      <Input
        placeholder="Cari nama atau NIK warga..."
        value={value ? `${value.name} · ${value.nik}` : query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {open && results.length > 0 && (
        <Card className="absolute z-10 mt-1 w-full max-h-60 overflow-auto">
          <CardContent className="p-2 space-y-1">
            {results.map((c) => (
              <button
                key={c.id}
                type="button"
                className="w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm"
                onClick={() => {
                  onChange(c);
                  setQuery("");
                  setOpen(false);
                }}
              >
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.nik}</p>
              </button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
