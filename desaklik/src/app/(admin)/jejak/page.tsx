"use client";

import { useState } from "react";
import { mockLetters } from "@/lib/data/surat";
import { LetterStatusBadge } from "@/components/jejak/letter-status-badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

export default function JejakPage() {
  const [search, setSearch] = useState("");

  const filtered = mockLetters.filter(
    (l) =>
      l.citizenName.toLowerCase().includes(search.toLowerCase()) ||
      l.type.toLowerCase().includes(search.toLowerCase()) ||
      l.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Jejak Surat</h2>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari nama, jenis surat, atau nomor..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Pemohon</TableHead>
              <TableHead>Tujuan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((l) => (
              <TableRow key={l.id}>
                <TableCell className="font-mono text-xs">{l.id}</TableCell>
                <TableCell className="font-medium">{l.type}</TableCell>
                <TableCell>{l.citizenName}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {l.purpose}
                </TableCell>
                <TableCell>
                  <LetterStatusBadge status={l.status} />
                </TableCell>
                <TableCell className="text-right">
                  <a
                    href={`/jejak/${l.id}`}
                    className="text-sm text-primary hover:underline"
                  >
                    Detail
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
