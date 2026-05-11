"use client"

import * as React from "react"
import { FileText, Plus, FloppyDisk } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TemplateBuilderPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#171d1c]">Builder Template Surat</h1>
          <p className="text-sm text-stone-500">Edit format surat dinamis menggunakan placeholder.</p>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <Button variant="outline" className="border-stone-200 text-stone-600">
            Batal
          </Button>
          <Button className="bg-[#0D9488] hover:bg-[#0D9488]/90 text-white flex items-center gap-2">
            <FloppyDisk size={18} weight="bold" />
            <span>Simpan Template</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Editor Area */}
        <div className="md:col-span-2 space-y-4">
          <Card className="rounded-xl border-stone-200 shadow-sm border">
             <CardHeader className="border-b border-stone-100 bg-[#f5faf8]/50 pb-4">
               <Input
                 className="text-lg font-bold border-transparent bg-transparent px-0 focus-visible:ring-0 shadow-none h-auto"
                 defaultValue="Surat Keterangan Usaha"
               />
               <p className="text-xs text-stone-500">Kategori: Ekonomi & Usaha</p>
             </CardHeader>
             <CardContent className="p-0">
                {/* Fake Rich Text Toolbar */}
                <div className="flex items-center gap-2 p-2 border-b border-stone-100 bg-white">
                  <Button variant="ghost" size="sm" className="h-8 px-2 font-bold">B</Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 italic">I</Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2 underline">U</Button>
                  <div className="w-px h-4 bg-stone-200 mx-2" />
                  <Button variant="ghost" size="sm" className="h-8 px-2">Kiri</Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">Tengah</Button>
                </div>
                {/* Editor textarea */}
                <textarea
                  className="w-full h-[500px] p-6 resize-none focus:outline-none text-stone-700 leading-relaxed"
                  defaultValue={`Yang bertanda tangan di bawah ini Kepala Desa Purwosari, menerangkan dengan sesungguhnya bahwa:

Nama Lengkap : {{warga.namaLengkap}}
NIK          : {{warga.nik}}
Tempat/Tgl Lahir : {{warga.tempatLahir}}, {{warga.tglLahir}}
Alamat       : {{warga.alamat}}, RT {{warga.rt}} / RW {{warga.rw}}

Adalah benar penduduk Desa Purwosari dan yang bersangkutan memiliki usaha di bidang {{input.bidangUsaha}} yang berlokasi di {{input.lokasiUsaha}}.

Surat keterangan ini dibuat untuk keperluan {{input.keperluan}}.

Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya.

Purwosari, {{date.today}}
Kepala Desa


( ___________________ )`}
                />
             </CardContent>
          </Card>
        </div>

        {/* Sidebar / Variables */}
        <div className="space-y-4">
          <Card className="rounded-xl border-stone-200 shadow-sm border">
            <CardHeader>
              <CardTitle className="text-md">Variabel Dinamis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-stone-500 mb-4">
                Klik variabel untuk menyisipkan ke dalam dokumen. Data warga akan terisi otomatis.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-[#171d1c] mb-2 uppercase tracking-wider">Data Warga</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200 cursor-pointer font-mono text-[10px]">{`{{warga.namaLengkap}}`}</Badge>
                    <Badge variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200 cursor-pointer font-mono text-[10px]">{`{{warga.nik}}`}</Badge>
                    <Badge variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200 cursor-pointer font-mono text-[10px]">{`{{warga.alamat}}`}</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#171d1c] mb-2 uppercase tracking-wider">Input Dinamis (Isi saat buat)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-[#0284C7] text-[#0284C7] bg-[#0284C7]/5 cursor-pointer font-mono text-[10px]">{`{{input.bidangUsaha}}`}</Badge>
                    <Badge variant="outline" className="border-[#0284C7] text-[#0284C7] bg-[#0284C7]/5 cursor-pointer font-mono text-[10px]">{`{{input.lokasiUsaha}}`}</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-[#171d1c] mb-2 uppercase tracking-wider">Sistem</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200 cursor-pointer font-mono text-[10px]">{`{{date.today}}`}</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
