"use client";

import { MapPlaceholder } from "@/components/peta/map-placeholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockParcels } from "@/lib/data/peta";

export default function PetaAdminPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Peta Kita</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <MapPlaceholder height="h-[500px]" />
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Statistik Bidang</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Bidang</span>
                <span className="font-medium">{mockParcels.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Luas</span>
                <span className="font-medium">
                  {mockParcels.reduce((a, b) => a + b.area, 0)} m²
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pemukiman</span>
                <span className="font-medium">
                  {mockParcels.filter((p) => p.landUse === "Pemukiman").length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pertanian</span>
                <span className="font-medium">
                  {mockParcels.filter((p) => p.landUse === "Pertanian").length}
                </span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Daftar Bidang</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 max-h-80 overflow-auto">
              {mockParcels.map((p) => (
                <a
                  key={p.id}
                  href={`/peta/${p.id}`}
                  className="block rounded-lg border p-3 hover:bg-accent transition-colors"
                >
                  <p className="text-sm font-medium">{p.parcelNumber}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.owner} · {p.landUse} · {p.area} m²
                  </p>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
