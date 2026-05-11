"use client"

import * as React from "react"
import { GearSix, Storefront, Palette, MapPinLine } from "@phosphor-icons/react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#171d1c]">Pengaturan Desa</h1>
          <p className="text-sm text-stone-500">Kelola informasi, profil, dan preferensi sistem desa.</p>
        </div>
        <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
          Simpan Perubahan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Settings Navigation */}
        <div className="md:col-span-1 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-[#0D9488] bg-[#0D9488]/10 font-medium">
            <Storefront className="mr-2 h-4 w-4" />
            Profil Desa
          </Button>
          <Button variant="ghost" className="w-full justify-start text-stone-600 hover:text-[#171d1c]">
            <MapPinLine className="mr-2 h-4 w-4" />
            Data Wilayah
          </Button>
          <Button variant="ghost" className="w-full justify-start text-stone-600 hover:text-[#171d1c]">
            <Palette className="mr-2 h-4 w-4" />
            Tema & Logo
          </Button>
          <Button variant="ghost" className="w-full justify-start text-stone-600 hover:text-[#171d1c]">
            <GearSix className="mr-2 h-4 w-4" />
            Sistem
          </Button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-xl border-stone-200 shadow-sm border">
            <CardHeader>
              <CardTitle className="text-lg">Profil Utama</CardTitle>
              <CardDescription>Informasi dasar yang akan ditampilkan di kop surat dan portal warga.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#171d1c]">Nama Desa</label>
                <Input defaultValue="Purwosari" className="bg-[#f5faf8]" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#171d1c]">Nama Kepala Desa</label>
                <Input defaultValue="Budi Santoso, S.E." className="bg-[#f5faf8]" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#171d1c]">NIP Kepala Desa (Opsional)</label>
                <Input placeholder="Masukkan NIP" className="bg-[#f5faf8]" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#171d1c]">Alamat Kantor Desa</label>
                <textarea
                  className="w-full rounded-md border border-stone-200 bg-[#f5faf8] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                  rows={3}
                  defaultValue="Jl. Raya Purwosari No. 1, Kecamatan Purwosari, Kabupaten Pasuruan"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-stone-200 shadow-sm border">
            <CardHeader>
              <CardTitle className="text-lg">Kontak & Digital</CardTitle>
              <CardDescription>Informasi kontak resmi desa.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#171d1c]">Email Resmi</label>
                <Input defaultValue="pemdes@purwosari.desa.id" className="bg-[#f5faf8]" type="email" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium text-[#171d1c]">No. Telepon / WhatsApp</label>
                <Input defaultValue="081234567890" className="bg-[#f5faf8]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
