"use client";

import { Citizen } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CitizenTableProps {
  data: Citizen[];
}

export function CitizenTable({ data }: CitizenTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">NIK</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead className="hidden md:table-cell">Alamat</TableHead>
            <TableHead className="hidden md:table-cell">RT/RW</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((c) => (
            <TableRow key={c.id}>
              <TableCell className="font-mono text-xs">{c.nik}</TableCell>
              <TableCell className="font-medium">{c.name}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                {c.address}
              </TableCell>
              <TableCell className="hidden md:table-cell text-sm">
                {c.rt}/{c.rw}
              </TableCell>
              <TableCell>
                <Badge
                  variant={c.status === "Aktif" ? "default" : "secondary"}
                  className={
                    c.status === "Aktif"
                      ? "bg-success/10 text-success hover:bg-success/20"
                      : ""
                  }
                >
                  {c.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
