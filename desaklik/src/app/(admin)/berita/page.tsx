"use client";

import { useState } from "react";
import { mockNews } from "@/lib/data/berita";
import { NewsCard } from "@/components/berita/news-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Plus, Search } from "lucide-react";

export default function BeritaAdminPage() {
  const [search, setSearch] = useState("");

  const filtered = mockNews.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Bale Warta</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          Tulis Berita
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari berita..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="hidden md:block rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Penulis</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((n) => (
              <TableRow key={n.id}>
                <TableCell className="font-medium max-w-xs truncate">
                  {n.title}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{n.category}</Badge>
                </TableCell>
                <TableCell>{n.author}</TableCell>
                <TableCell>
                  {new Date(n.publishedAt).toLocaleDateString("id-ID")}
                </TableCell>
                <TableCell>
                  <Switch checked={n.isPublished} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-3">
        {filtered.map((n) => (
          <NewsCard key={n.id} news={n} horizontal />
        ))}
      </div>
    </div>
  );
}
