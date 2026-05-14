import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TemplateVariables() {
  return (
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
  )
}
