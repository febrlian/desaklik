import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, Clock, CheckCircle } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#171d1c]">Dashboard</h1>
        <p className="text-stone-500 mt-2">Pagi, Pak Lurah. Ada 3 surat menunggu tanda tangan.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl border-stone-200 shadow-sm border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#171d1c]">Total Warga</CardTitle>
            <Users className="h-4 w-4 text-[#0D9488]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#171d1c]">2,450</div>
            <p className="text-xs text-stone-500">+12 dari bulan lalu</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-stone-200 shadow-sm border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#171d1c]">Permohonan Baru</CardTitle>
            <FileText className="h-4 w-4 text-[#0284C7]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#171d1c]">15</div>
            <p className="text-xs text-stone-500">Butuh diproses segera</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-stone-200 shadow-sm border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#171d1c]">Sedang Diproses</CardTitle>
            <Clock className="h-4 w-4 text-[#D97706]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#171d1c]">8</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-stone-200 shadow-sm border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-[#171d1c]">Selesai Hari Ini</CardTitle>
            <CheckCircle className="h-4 w-4 text-[#16A34A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#171d1c]">4</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-xl border-stone-200 shadow-sm border">
          <CardHeader>
            <CardTitle className="text-lg">Aktivitas Terkini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Budi Santoso', doc: 'Surat Keterangan Usaha', time: '10 menit yang lalu' },
                { name: 'Siti Aminah', doc: 'Surat Domisili', time: '1 jam yang lalu' },
                { name: 'Agus Pratama', doc: 'Surat Kelahiran', time: '3 jam yang lalu' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#0D9488] rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#171d1c]">{activity.doc} - {activity.name}</p>
                    <p className="text-xs text-stone-500">Diajukan {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
