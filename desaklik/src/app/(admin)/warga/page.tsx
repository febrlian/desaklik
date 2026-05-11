"use client";

import { useState } from "react";
import { CitizenTable } from "@/components/warga/citizen-table";
import { CitizenCard } from "@/components/warga/citizen-card";
import { mockCitizens } from "@/lib/data/warga";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";

export default function WargaPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = mockCitizens.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.nik.includes(search);
    const matchStatus = statusFilter === "all" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">WargaHub</h2>
        <Button size="sm" asChild>
          <a href="/warga/tambah">
            <Plus className="h-4 w-4 mr-1" />
            Tambah Warga
          </a>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari nama atau NIK..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="Aktif">Aktif</SelectItem>
            <SelectItem value="Pindah">Pindah</SelectItem>
            <SelectItem value="Meninggal">Meninggal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="hidden md:block">
        <CitizenTable data={filtered} />
      </div>

      <div className="md:hidden grid grid-cols-1 gap-3">
        {filtered.map((c) => (
          <CitizenCard key={c.id} citizen={c} />
        ))}
      </div>
    </div>
  );
}
