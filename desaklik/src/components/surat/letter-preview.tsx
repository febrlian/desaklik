"use client";

import { LetterType, Citizen } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface LetterPreviewProps {
  type: LetterType | null;
  citizen: Citizen | null;
  purpose: string;
}

export function LetterPreview({ type, citizen, purpose }: LetterPreviewProps) {
  if (!type || !citizen) {
    return (
      <Card className="bg-muted/50">
        <CardContent className="p-6 text-center text-sm text-muted-foreground">
          Pilih jenis surat dan warga untuk melihat pratinjau
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="text-center border-b pb-4">
          <h3 className="font-bold text-lg uppercase">Pemerintah Desa</h3>
          <p className="text-sm text-muted-foreground">Desa Maju Jaya</p>
        </div>
        <div className="text-center">
          <h4 className="font-bold underline">SURAT KETERANGAN {type.toUpperCase()}</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Nomor: 145/SK/{type}/{new Date().getFullYear()}
          </p>
        </div>
        <div className="text-sm space-y-2 leading-relaxed">
          <p>
            Yang bertanda tangan di bawah ini, Kepala Desa Maju Jaya,
            Kecamatan Suka Maju, Kabupaten Sejahtera, dengan ini menerangkan
            bahwa:
          </p>
          <table className="text-sm ml-4">
            <tbody>
              <tr>
                <td className="pr-4">Nama</td>
                <td>: {citizen.name}</td>
              </tr>
              <tr>
                <td className="pr-4">NIK</td>
                <td>: {citizen.nik}</td>
              </tr>
              <tr>
                <td className="pr-4">Tempat/Tgl Lahir</td>
                <td>: {citizen.birthPlace}, {citizen.birthDate}</td>
              </tr>
              <tr>
                <td className="pr-4">Alamat</td>
                <td>: {citizen.address}</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2">
            Adalah benar warga Desa Maju Jaya dan surat ini diterbitkan untuk{" "}
            <strong>{purpose}</strong>.
          </p>
        </div>
        <div className="flex justify-end pt-4">
          <div className="text-center text-sm">
            <p>Desa Maju Jaya, {new Date().toLocaleDateString("id-ID")}</p>
            <p className="mt-8 font-bold">Kepala Desa</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
