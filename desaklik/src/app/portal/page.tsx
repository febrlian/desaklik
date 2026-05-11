"use client"

import * as React from "react"
import { FileText, MagnifyingGlass, WarningCircle, CaretRight } from "@phosphor-icons/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PortalHomePage() {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#171d1c]">Halo, Budi!</h2>
        <p className="text-sm text-stone-500 mt-1">Ada yang bisa dibantu untuk urusan desamu hari ini?</p>
      </div>

      {/* Primary Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-xl border-transparent shadow-none bg-white hover:bg-stone-50 cursor-pointer transition-colors">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
              <FileText size={24} className="text-[#0D9488]" weight="fill" />
            </div>
            <div>
              <p className="font-semibold text-sm text-[#171d1c]">Ajukan Surat</p>
              <p className="text-[10px] text-stone-500 mt-1">Buat surat pengantar</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-transparent shadow-none bg-white hover:bg-stone-50 cursor-pointer transition-colors">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#0284C7]/10 flex items-center justify-center">
              <MagnifyingGlass size={24} className="text-[#0284C7]" weight="bold" />
            </div>
            <div>
              <p className="font-semibold text-sm text-[#171d1c]">Lacak Surat</p>
              <p className="text-[10px] text-stone-500 mt-1">Cek status permohonan</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Requests */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#171d1c] uppercase tracking-wider">Permohonan Aktif</h3>
          <span className="text-xs text-[#0D9488] font-medium">Lihat Semua</span>
        </div>

        <Card className="rounded-xl border border-[#0D9488]/20 shadow-sm bg-white overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#D97706]/10 flex items-center justify-center">
                <FileText size={20} className="text-[#D97706]" weight="fill" />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#171d1c]">Surat Keterangan Usaha</p>
                <p className="text-xs text-[#D97706] font-medium mt-0.5">Sedang Diproses (Kades)</p>
              </div>
            </div>
            <CaretRight size={16} className="text-stone-400" />
          </div>
          <div className="bg-stone-50 px-4 py-2 text-[10px] text-stone-500 border-t border-stone-100 flex justify-between">
            <span>Diajukan: Hari ini, 10:45</span>
            <span>No: SRT-005</span>
          </div>
        </Card>
      </div>

      {/* Info Desa Widget */}
      <div className="mt-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#171d1c] uppercase tracking-wider">Info Desa Terkini</h3>
        </div>

        <Card className="rounded-xl border-transparent shadow-none bg-white">
          <CardContent className="p-0">
            <div className="flex gap-3 p-4 border-b border-stone-100">
              <div className="w-16 h-16 rounded-lg bg-stone-200 shrink-0 bg-[url('https://placehold.co/100x100/e7e5e4/a8a29e?text=News')] bg-cover bg-center" />
              <div>
                <p className="font-semibold text-sm text-[#171d1c] line-clamp-2">Jadwal Vaksinasi Massal di Balai Desa Purwosari</p>
                <p className="text-[10px] text-stone-500 mt-1">12 Mei 2026</p>
              </div>
            </div>
            <div className="flex gap-3 p-4">
              <div className="w-16 h-16 rounded-lg bg-stone-200 shrink-0 bg-[url('https://placehold.co/100x100/e7e5e4/a8a29e?text=News')] bg-cover bg-center" />
              <div>
                <p className="font-semibold text-sm text-[#171d1c] line-clamp-2">Penyaluran BLT Dana Desa Tahap 3 Tahun 2026</p>
                <p className="text-[10px] text-stone-500 mt-1">10 Mei 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
