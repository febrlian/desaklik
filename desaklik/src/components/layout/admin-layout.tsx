import * as React from "react"
import { SquaresFour, Users, FileText, ClockCounterClockwise, MapPinArea, NewspaperClipping, GearSix } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#f5faf8]">
      {/* Sidebar */}
      <aside className="w-[240px] border-r bg-white hidden md:flex flex-col border-stone-200">
        <div className="h-16 flex items-center px-6 border-b border-stone-200 font-bold text-[#0D9488] text-xl">
          DesaKlik
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-[#0D9488]/10 text-[#0D9488] font-medium">
            <SquaresFour size={24} />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/warga" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors">
            <Users size={24} />
            <span>WargaHub</span>
          </Link>
          <Link href="/admin/surat" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors">
            <FileText size={24} />
            <span>SuratInstan</span>
          </Link>
          <Link href="/admin/riwayat" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors">
            <ClockCounterClockwise size={24} />
            <span>Jejak Surat</span>
          </Link>
          <Link href="/admin/peta" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors">
            <MapPinArea size={24} />
            <span>Peta Kita</span>
          </Link>
          <Link href="/admin/berita" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors">
            <NewspaperClipping size={24} />
            <span>Bale Warta</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-stone-200">
          <Link href="/admin/settings" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors">
            <GearSix size={24} />
            <span>Pengaturan</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="h-16 border-b border-stone-200 bg-white flex items-center justify-between px-6">
           <h2 className="text-xl font-semibold">Desa Purwosari</h2>
           <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-[#0D9488] text-white flex items-center justify-center text-sm font-bold">OP</div>
           </div>
        </header>
        <div className="p-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
