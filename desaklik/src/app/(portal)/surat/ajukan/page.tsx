"use client";

import { useState } from "react";
import { LetterType, Citizen } from "@/types";
import { LetterTypeSelector } from "@/components/surat/letter-type-selector";
import { CitizenSearchField } from "@/components/surat/citizen-search-field";
import { LetterPreview } from "@/components/surat/letter-preview";
import { WizardStepper } from "@/components/warga/wizard-stepper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const steps = ["Pilih Jenis", "Pilih Warga", "Konfirmasi"];

export default function PortalAjukanSuratPage() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState<LetterType | null>(null);
  const [citizen, setCitizen] = useState<Citizen | null>(null);
  const [purpose, setPurpose] = useState("");

  const handleSubmit = () => {
    toast.success("Surat berhasil diajukan!");
    setTimeout(() => {
      window.location.href = "/lacak";
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Ajukan Surat</h2>
      <WizardStepper steps={steps} current={step} />

      {step === 0 && (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Pilih jenis surat</p>
          <LetterTypeSelector value={type} onChange={setType} />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Pilih warga pemohon</p>
          <CitizenSearchField value={citizen} onChange={setCitizen} />
          <div className="space-y-2">
            <Label>Tujuan Pengajuan</Label>
            <Input
              placeholder="Contoh: Pengajuan izin usaha..."
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <LetterPreview type={type} citizen={citizen} purpose={purpose} />
        </div>
      )}

      <div className="flex justify-between">
        <Button
          variant="outline"
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
        >
          Kembali
        </Button>
        {step < steps.length - 1 ? (
          <Button
            disabled={
              (step === 0 && !type) || (step === 1 && (!citizen || !purpose))
            }
            onClick={() => setStep((s) => s + 1)}
          >
            Lanjut
          </Button>
        ) : (
          <Button onClick={handleSubmit}>Ajukan</Button>
        )}
      </div>
    </div>
  );
}
