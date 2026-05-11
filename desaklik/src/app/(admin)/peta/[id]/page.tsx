"use client";

import { useParams } from "next/navigation";
import { mockParcels } from "@/lib/data/peta";
import { MapPlaceholder } from "@/components/peta/map-placeholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ParcelDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const parcel = mockParcels.find((p) => p.id === id);

  if (!parcel) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        Bidang tanah tidak ditemukan
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <a href="/peta">
            <ArrowLeft className="h-5 w-5" />
          </a>
        </Button>
        <h2 className="text-xl font-semibold">Detail Bidang</h2>
      </div>

      <MapPlaceholder height="h-64" />

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{parcel.parcelNumber}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Pemilik</p>
              <p className="font-medium">{parcel.owner}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Luas</p>
              <p className="font-medium">{parcel.area} m²</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Penggunaan Lahan</p>
              <p className="font-medium">{parcel.landUse}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Lokasi</p>
              <p className="font-medium">{parcel.location}</p>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">Koordinat</p>
            <p className="font-medium">
              {parcel.coordinates[0]}, {parcel.coordinates[1]}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
