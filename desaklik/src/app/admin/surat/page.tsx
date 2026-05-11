"use client"

import * as React from "react"
import { FileText, Plus, FilePlus, DownloadSimple, Printer } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function SuratInstanPage() {
  const letters = [
    { id: "SRT-001", type: "Surat Keterangan Usaha", citizen: "Budi Santoso", date: "2026-05-11", status: "PENDING" },
    { id: "SRT-002", type: "Surat Domisili", citizen: "Siti Aminah", date: "2026-05-10", status: "APPROVED" },
    { id: "SRT-003", type: "Surat Tidak Mampu", citizen: "Hendra Wijaya", date: "2026-05-09", status: "DRAFT" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#171d1c]">SuratInstan</h1>
          <p className="text-sm text-stone-500">Engine pembuatan dan persetujuan surat otomatis.</p>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white flex items-center gap-2">
            <FilePlus size={18} weight="bold" />
            <span>Buat Surat Baru</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="rounded-xl border-stone-200 shadow-sm border col-span-2">
          <CardHeader>
            <CardTitle>Antrean Persetujuan</CardTitle>
            <CardDescription>Surat yang membutuhkan aksi Anda.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-[#f5f4f4]">
                <TableRow className="border-stone-200 hover:bg-transparent">
                  <TableHead className="font-semibold text-stone-600">No. Surat</TableHead>
                  <TableHead className="font-semibold text-stone-600">Jenis Surat</TableHead>
                  <TableHead className="font-semibold text-stone-600">Pemohon</TableHead>
                  <TableHead className="font-semibold text-stone-600">Status</TableHead>
                  <TableHead className="text-right font-semibold text-stone-600">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {letters.map((letter) => (
                  <TableRow key={letter.id} className="border-stone-200 hover:bg-[#f5faf8]">
                    <TableCell className="font-medium text-[#171d1c]">{letter.id}</TableCell>
                    <TableCell className="text-[#0D9488] font-medium">{letter.type}</TableCell>
                    <TableCell className="text-stone-600">{letter.citizen}</TableCell>
                    <TableCell>
                      {letter.status === "PENDING" && <Badge className="bg-[#D97706] hover:bg-[#D97706]/80">Menunggu</Badge>}
                      {letter.status === "APPROVED" && <Badge className="bg-[#16A34A] hover:bg-[#16A34A]/80">Disetujui</Badge>}
                      {letter.status === "DRAFT" && <Badge variant="outline" className="text-stone-500 border-stone-300">Draft</Badge>}
                    </TableCell>
                    <TableCell className="text-right">
                      {letter.status === "APPROVED" ? (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-[#0D9488] hover:bg-[#0D9488]/10">
                          <Printer size={18} />
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="border-stone-200 text-[#0D9488]">
                          Proses
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-stone-200 shadow-sm border">
          <CardHeader>
            <CardTitle>Template Aktif</CardTitle>
            <CardDescription>Kelola format surat desa.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Surat Keterangan Usaha', 'Surat Domisili', 'Surat Kelahiran'].map((template, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-stone-200 bg-[#f5f4f4]/50">
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#0D9488]" size={20} />
                    <span className="text-sm font-medium text-[#171d1c]">{template}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-[#0284C7] hover:bg-[#0284C7]/10 hover:text-[#0284C7]">
                    Edit
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 border-dashed border-2 border-stone-300 text-stone-500 hover:text-[#0D9488] hover:border-[#0D9488]">
                <Plus size={16} className="mr-2" /> Buat Template Baru
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
