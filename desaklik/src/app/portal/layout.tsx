import * as React from "react"
import Link from "next/link"
import { House, FileText, MagnifyingGlass, Megaphone } from "@phosphor-icons/react/dist/ssr"

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5faf8] pb-14 md:pb-0">
      {/* Mobile Top Header */}
      <header className="h-16 border-b border-stone-200 bg-white flex items-center justify-between px-4 sticky top-0 z-10 md:hidden">
        <h1 className="text-lg font-bold text-[#0D9488]">DesaKlik</h1>
        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
          <span className="text-xs font-bold text-stone-600">BS</span>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="h-16 border-b border-stone-200 bg-white hidden md:flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-8">
           <h1 className="text-xl font-bold text-[#0D9488]">DesaKlik</h1>
           <nav className="flex gap-6">
             <Link href="/portal" className="text-sm font-medium text-[#171d1c]">Beranda</Link>
             <Link href="/portal/layanan" className="text-sm font-medium text-stone-500 hover:text-[#171d1c]">Layanan Surat</Link>
             <Link href="/portal/lacak" className="text-sm font-medium text-stone-500 hover:text-[#171d1c]">Lacak Surat</Link>
             <Link href="/portal/info" className="text-sm font-medium text-stone-500 hover:text-[#171d1c]">Info Desa</Link>
           </nav>
        </div>
        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
          <span className="text-xs font-bold text-stone-600">BS</span>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full p-4 md:p-8">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-stone-200 flex items-center justify-around px-2 z-10">
        <Link href="/portal" className="flex flex-col items-center gap-1 text-[#0D9488]">
          <House size={24} weight="fill" />
          <span className="text-[10px] font-medium">Beranda</span>
        </Link>
        <Link href="/portal/layanan" className="flex flex-col items-center gap-1 text-stone-500">
          <FileText size={24} />
          <span className="text-[10px] font-medium">Buat Surat</span>
        </Link>
        <Link href="/portal/lacak" className="flex flex-col items-center gap-1 text-stone-500">
          <MagnifyingGlass size={24} />
          <span className="text-[10px] font-medium">Lacak</span>
        </Link>
        <Link href="/portal/info" className="flex flex-col items-center gap-1 text-stone-500">
          <Megaphone size={24} />
          <span className="text-[10px] font-medium">Info Desa</span>
        </Link>
      </nav>
    </div>
  )
}
