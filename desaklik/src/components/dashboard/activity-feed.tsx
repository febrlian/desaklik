import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activities = [
  { id: 1, user: "Ahmad Sudirman", action: "mengajukan surat Domisili", time: "10 menit lalu" },
  { id: 2, user: "Petugas Desa", action: "memverifikasi data warga baru", time: "1 jam lalu" },
  { id: 3, user: "Siti Aminah", action: "mendaftar pinjam sound system", time: "2 jam lalu" },
  { id: 4, user: "Admin", action: "menerbitkan berita BLT Desa", time: "3 jam lalu" },
  { id: 5, user: "Budi Santoso", action: "mengajukan surat SKUsaha", time: "5 jam lalu" },
];

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-[10px] bg-muted">
                {a.user.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{a.user}</span>{" "}
                <span className="text-muted-foreground">{a.action}</span>
              </p>
              <p className="text-xs text-muted-foreground">{a.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
