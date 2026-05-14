import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function TemplateEditor() {
  return (
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
  )
}
