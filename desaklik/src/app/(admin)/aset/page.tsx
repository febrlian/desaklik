"use client";

import { useState } from "react";
import { mockAssets } from "@/lib/data/aset";
import { AssetCard } from "@/components/aset/asset-card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function AsetAdminPage() {
  const [search, setSearch] = useState("");

  const filtered = mockAssets.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Aset Desa</h2>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari aset..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="hidden md:block rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Lokasi</TableHead>
              <TableHead>Kondisi</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((a) => (
              <TableRow key={a.id}>
                <TableCell className="font-medium">{a.name}</TableCell>
                <TableCell>{a.category}</TableCell>
                <TableCell>{a.location}</TableCell>
                <TableCell>{a.condition}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      a.status === "Tersedia"
                        ? "bg-success/10 text-success"
                        : a.status === "Dipinjam"
                        ? "bg-warning/10 text-warning"
                        : "bg-destructive/10 text-destructive"
                    }
                  >
                    {a.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-3">
        {filtered.map((a) => (
          <AssetCard key={a.id} asset={a} />
        ))}
      </div>
    </div>
  );
}
