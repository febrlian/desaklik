"use client";

import { ThemeToggle } from "@/components/pengaturan/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useTenantStore } from "@/stores/tenant-store";
import { toast } from "sonner";

export default function PengaturanPage() {
  const { tenant, setTenant } = useTenantStore();

  const handleSave = () => {
    toast.success("Pengaturan berhasil disimpan");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold">Pengaturan</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Profil Desa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Nama Desa</Label>
            <Input
              value={tenant.name}
              onChange={(e) =>
                setTenant({ ...tenant, name: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Kecamatan</Label>
              <Input
                value={tenant.district}
                onChange={(e) =>
                  setTenant({ ...tenant, district: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Kabupaten/Provinsi</Label>
              <Input
                value={tenant.region}
                onChange={(e) =>
                  setTenant({ ...tenant, region: e.target.value })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tampilan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Tema</p>
              <p className="text-xs text-muted-foreground">
                Pilih tema tampilan aplikasi
              </p>
            </div>
            <ThemeToggle />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Notifikasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Email Notifikasi</p>
              <p className="text-xs text-muted-foreground">
                Kirim notifikasi ke email
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Notifikasi Surat Baru</p>
              <p className="text-xs text-muted-foreground">
                Notifikasi saat ada pengajuan surat
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={handleSave}>
        Simpan Pengaturan
      </Button>
    </div>
  );
}
