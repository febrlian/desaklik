"use client"

import * as React from "react"
import { Plus, MagnifyingGlass, Funnel, DotsThree, FileCsv } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"

// Mock Data based on exact user columns
const wargaData = [
  { id: 1, nik: "3201010101010001", nama: "Budi Santoso", tempatLahir: "Bogor", tglLahir: "1980-05-12", alamat: "Jl. Mawar No. 10", rt: "001", rw: "002", statusPerkawinan: "Kawin", kewarganegaraan: "WNI", pekerjaan: "Wiraswasta", pendidikan: "SMA", namaAyah: "Hasan", namaIbu: "Siti" },
  { id: 2, nik: "3201010202020002", nama: "Siti Aminah", tempatLahir: "Jakarta", tglLahir: "1985-08-22", alamat: "Jl. Melati No. 5", rt: "001", rw: "002", statusPerkawinan: "Kawin", kewarganegaraan: "WNI", pekerjaan: "Mengurus Rumah Tangga", pendidikan: "SMP", namaAyah: "Ahmad", namaIbu: "Aisyah" },
  { id: 3, nik: "3201010303030003", nama: "Agus Pratama", tempatLahir: "Bandung", tglLahir: "1992-11-05", alamat: "Jl. Anggrek No. 12", rt: "003", rw: "004", statusPerkawinan: "Belum Kawin", kewarganegaraan: "WNI", pekerjaan: "Karyawan Swasta", pendidikan: "S1", namaAyah: "Budi", namaIbu: "Dewi" },
  { id: 4, nik: "3201010404040004", nama: "Dewi Lestari", tempatLahir: "Surabaya", tglLahir: "1995-02-14", alamat: "Jl. Kenanga No. 8", rt: "002", rw: "001", statusPerkawinan: "Belum Kawin", kewarganegaraan: "WNI", pekerjaan: "Mahasiswa", pendidikan: "SMA", namaAyah: "Joko", namaIbu: "Rini" },
  { id: 5, nik: "3201010505050005", nama: "Hendra Wijaya", tempatLahir: "Semarang", tglLahir: "1978-09-30", alamat: "Jl. Kamboja No. 3", rt: "004", rw: "003", statusPerkawinan: "Kawin", kewarganegaraan: "WNI", pekerjaan: "PNS", pendidikan: "S2", namaAyah: "Suparman", namaIbu: "Sri" },
]

export default function WargaHubPage() {
  const [search, setSearch] = React.useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#171d1c]">WargaHub</h1>
          <p className="text-sm text-stone-500">Manajemen data kependudukan desa.</p>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <Button variant="outline" className="flex items-center gap-2 border-stone-200">
            <FileCsv size={18} />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white flex items-center gap-2">
            <Plus size={18} weight="bold" />
            <span>Tambah Warga</span>
          </Button>
        </div>
      </div>

      <Card className="border-stone-200 shadow-sm rounded-xl overflow-hidden">
        <div className="p-4 border-b border-stone-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <Input
              placeholder="Cari berdasarkan NIK atau Nama..."
              className="pl-9 bg-[#f5faf8] border-transparent focus-visible:ring-[#0D9488] focus-visible:bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-stone-200">
            <Funnel size={18} />
            <span>Filter</span>
          </Button>
        </div>

        <div className="bg-white overflow-x-auto">
          <Table className="min-w-[1200px]">
            <TableHeader className="bg-[#f5f4f4]">
              <TableRow className="border-stone-200 hover:bg-transparent">
                <TableHead className="font-semibold text-stone-600">NIK</TableHead>
                <TableHead className="font-semibold text-stone-600">Nama Lengkap</TableHead>
                <TableHead className="font-semibold text-stone-600">TTL</TableHead>
                <TableHead className="font-semibold text-stone-600">Alamat Lengkap</TableHead>
                <TableHead className="font-semibold text-stone-600">Pekerjaan / Pendidikan</TableHead>
                <TableHead className="font-semibold text-stone-600">Orang Tua</TableHead>
                <TableHead className="text-right font-semibold text-stone-600">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wargaData.map((warga) => (
                <TableRow key={warga.id} className="border-stone-200 hover:bg-[#f5faf8]">
                  <TableCell className="font-medium text-[#0D9488]">{warga.nik}</TableCell>
                  <TableCell>
                    <div className="font-medium text-[#171d1c]">{warga.nama}</div>
                    <div className="text-xs text-stone-500">{warga.kewarganegaraan} • {warga.statusPerkawinan}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-stone-600">{warga.tempatLahir}</div>
                    <div className="text-xs text-stone-500">{warga.tglLahir}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-stone-600">{warga.alamat}</div>
                    <div className="text-xs text-stone-500">RT {warga.rt} / RW {warga.rw}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-stone-600">{warga.pekerjaan}</div>
                    <div className="text-xs text-stone-500">{warga.pendidikan}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-xs text-stone-500">Ayah: {warga.namaAyah}</div>
                    <div className="text-xs text-stone-500">Ibu: {warga.namaIbu}</div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-stone-400 hover:text-[#0D9488] hover:bg-[#0D9488]/10" aria-label={`Opsi untuk ${warga.nama}`}>
                      <DotsThree size={20} weight="bold" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t border-stone-200 bg-white flex items-center justify-between text-sm text-stone-500">
          <span>Menampilkan 1-5 dari 2,450 warga</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled className="border-stone-200">Sebelumnya</Button>
            <Button variant="outline" size="sm" className="border-stone-200">Selanjutnya</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
