"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Pencil } from "lucide-react";

const templates = [
  { id: "T1", name: "Surat Keterangan Usaha", type: "SKUsaha", placeholders: ["nama", "nik", "alamat", "usaha"] },
  { id: "T2", name: "Surat Keterangan Domisili", type: "Domisili", placeholders: ["nama", "nik", "alamat", "tujuan"] },
  { id: "T3", name: "Surat Pengantar", type: "Pengantar", placeholders: ["nama", "nik", "keperluan"] },
  { id: "T4", name: "Surat Tidak Mampu", type: "Tidak Mampu", placeholders: ["nama", "nik", "alamat", "keperluan"] },
];

export default function TemplatePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Template Surat</h2>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-1" />
          Template Baru
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((t) => (
          <Card key={t.id}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{t.name}</h3>
                    <p className="text-xs text-muted-foreground">{t.type}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`/pengaturan/template/${t.id}/edit`}>
                    <Pencil className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-1">
                {t.placeholders.map((p) => (
                  <Badge key={p} variant="secondary" className="text-[10px]">
                    {"{"}{p}{"}"}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
