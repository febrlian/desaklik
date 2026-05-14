"use client";

import { useState, useMemo } from "react";
import { mockLetters } from "@/lib/data/surat";
import { LetterStatusBadge } from "@/components/jejak/letter-status-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PortalLacakPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return mockLetters.filter(
      (l) =>
        l.citizenName.toLowerCase().includes(lowerSearch) ||
        l.id.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Lacak Surat</h2>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari nomor surat atau nama..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-3">
        {filtered.map((l) => (
          <Card key={l.id}>
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs">{l.id}</span>
                <LetterStatusBadge status={l.status} />
              </div>
              <p className="text-sm font-medium">{l.type}</p>
              <p className="text-xs text-muted-foreground">{l.purpose}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(l.createdAt).toLocaleDateString("id-ID")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
