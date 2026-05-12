"use client"

import * as React from "react"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const historyData = [
  { id: "SRT-002", type: "Surat Domisili", citizen: "Siti Aminah", date: "Hari ini, 10:45", status: "Selesai", actor: "Kepala Desa" },
  { id: "SRT-002", type: "Surat Domisili", citizen: "Siti Aminah", date: "Hari ini, 09:30", status: "Diproses", actor: "Operator" },
  { id: "SRT-002", type: "Surat Domisili", citizen: "Siti Aminah", date: "Kemarin, 14:20", status: "Diajukan", actor: "Warga" },
]

export default function JejakSuratPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#171d1c]">Jejak Surat</h1>
          <p className="text-sm text-stone-500">Lacak riwayat pemrosesan dokumen secara transparan.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 space-y-4">
          <Card className="rounded-xl border-stone-200 shadow-sm border p-4">
             <div className="relative w-full mb-4">
                <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <Input
                  placeholder="Cari No. Surat..."
                  className="pl-9 bg-[#f5faf8] border-transparent focus-visible:ring-[#0D9488]"
                  defaultValue="SRT-002"
                />
             </div>
             <div className="flex items-center gap-3 p-3 rounded-lg border border-[#0D9488] bg-[#0D9488]/5">
                <FileText className="text-[#0D9488]" size={24} />
                <div>
                  <p className="font-semibold text-[#171d1c]">SRT-002</p>
                  <p className="text-xs text-stone-500">Surat Domisili - Siti Aminah</p>
                </div>
             </div>
          </Card>
        </div>

        <div className="w-full md:w-2/3">
          <Card className="rounded-xl border-stone-200 shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-[#171d1c] mb-6">Timeline Perjalanan Surat</h3>
            <div className="relative border-l-2 border-stone-200 ml-4 space-y-8">
              {historyData.map((item, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${idx === 0 ? 'bg-[#16A34A]' : 'bg-stone-300'}`} />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="font-medium text-[#171d1c]">{item.status}</p>
                      <p className="text-sm text-stone-500">Oleh: {item.actor}</p>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs text-stone-500 border-stone-200 bg-stone-50">
                      {item.date}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
// Adding missing FileText icon import for this file
import { FileText } from "lucide-react"
