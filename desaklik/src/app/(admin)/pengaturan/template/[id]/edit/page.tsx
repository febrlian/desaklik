"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function TemplateEditPage() {
  const params = useParams();
  const id = params.id as string;

  const handleSave = () => {
    toast.success("Template berhasil disimpan");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Edit Template</h2>
        <Button onClick={handleSave}>Simpan</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Konten Template</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              className="min-h-[400px] font-mono text-sm"
              defaultValue={`Yang bertanda tangan di bawah ini, Kepala Desa {nama_desa}, menerangkan bahwa:

Nama          : {nama}
NIK           : {nik}
Tempat/Tgl Lahir : {tempat_lahir}, {tanggal_lahir}
Alamat        : {alamat}

Adalah benar warga desa kami dan surat ini diterbitkan untuk {tujuan}.

Demikian surat keterangan ini dibuat untuk dipergunakan sebagaimana mestinya.`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pratinjau</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p>
              Yang bertanda tangan di bawah ini, Kepala Desa Maju Jaya,
              menerangkan bahwa:
            </p>
            <table className="text-sm">
              <tbody>
                <tr>
                  <td className="pr-4">Nama</td>
                  <td>: Ahmad Sudirman</td>
                </tr>
                <tr>
                  <td className="pr-4">NIK</td>
                  <td>: 3201010101010001</td>
                </tr>
                <tr>
                  <td className="pr-4">Tempat/Tgl Lahir</td>
                  <td>: Jakarta, 15 Maret 1985</td>
                </tr>
                <tr>
                  <td className="pr-4">Alamat</td>
                  <td>: Jl. Merdeka No. 1</td>
                </tr>
              </tbody>
            </table>
            <p>
              Adalah benar warga desa kami dan surat ini diterbitkan untuk{" "}
              <strong>Pengajuan izin usaha warung sembako</strong>.
            </p>
            <p>
              Demikian surat keterangan ini dibuat untuk dipergunakan
              sebagaimana mestinya.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
