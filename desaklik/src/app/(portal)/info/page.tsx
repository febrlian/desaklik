"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Users } from "lucide-react";

export default function PortalInfoPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Info Desa</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Profil Desa Maju Jaya</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p className="text-muted-foreground leading-relaxed">
            Desa Maju Jaya adalah desa yang terletak di Kecamatan Suka Maju,
            Kabupaten Sejahtera, Provinsi Jawa Barat. Desa ini memiliki potensi
            pertanian dan UMKM yang berkembang pesat.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Jl. Desa Maju Jaya No. 1, Kec. Suka Maju</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(0266) 123456</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>desa.majujaya@email.id</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>1.248 jiwa</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Struktur Pemerintahan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Kepala Desa</span>
            <span className="font-medium">Bapak Lurah</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sekretaris Desa</span>
            <span className="font-medium">Ibu Sekdes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Bendahara</span>
            <span className="font-medium">Bapak Bendahara</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
