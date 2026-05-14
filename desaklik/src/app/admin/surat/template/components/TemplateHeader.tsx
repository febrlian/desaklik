import * as React from "react"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TemplateHeader() {
  return (
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
          <Save size={18} />
          <span>Simpan Template</span>
        </Button>
      </div>
    </div>
  )
}
