import { MetricCard } from "@/components/dashboard/metric-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { PendingLetters } from "@/components/dashboard/pending-letters";
import { Button } from "@/components/ui/button";
import { Users, FileText, Package, Newspaper, Plus, FilePlus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href="/warga/tambah">
              <Plus className="h-4 w-4 mr-1" />
              Warga
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="/surat">
              <FilePlus className="h-4 w-4 mr-1" />
              Surat
            </a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Warga" value="1,248" icon={Users} trend="+12 bulan ini" trendUp />
        <MetricCard title="Surat Bulan Ini" value="86" icon={FileText} trend="+5%" trendUp />
        <MetricCard title="Aset Desa" value="42" icon={Package} trend="-2" trendUp={false} />
        <MetricCard title="Berita Aktif" value="8" icon={Newspaper} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PendingLetters />
        <ActivityFeed />
      </div>
    </div>
  );
}
