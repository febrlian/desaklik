"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { citizenSchema, CitizenFormData } from "@/lib/validations/warga";
import { WizardStepper } from "@/components/warga/wizard-stepper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const steps = ["Identitas", "Alamat", "Konfirmasi"];

export default function TambahWargaPage() {
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CitizenFormData>({
    resolver: zodResolver(citizenSchema),
    defaultValues: { status: "Aktif" },
  });

  const values = watch();

  const onSubmit = (data: CitizenFormData) => {
    toast.success(`Warga ${data.name} berhasil ditambahkan!`);
    setTimeout(() => {
      window.location.href = "/warga";
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold">Tambah Warga Baru</h2>
      <WizardStepper steps={steps} current={step} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {step === 0 && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>NIK</Label>
                <Input {...register("nik")} placeholder="3201xxxxxxxxxxxx" />
                {errors.nik && (
                  <p className="text-xs text-destructive">{errors.nik.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Nama Lengkap</Label>
                <Input {...register("name")} placeholder="Nama lengkap" />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tempat Lahir</Label>
                  <Input {...register("birthPlace")} />
                </div>
                <div className="space-y-2">
                  <Label>Tanggal Lahir</Label>
                  <Input type="date" {...register("birthDate")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Jenis Kelamin</Label>
                <Select
                  onValueChange={(v) =>
                    setValue("gender", v as "Laki-laki" | "Perempuan")
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="Perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Agama</Label>
                <Input {...register("religion")} />
              </div>
              <div className="space-y-2">
                <Label>Status Perkawinan</Label>
                <Input {...register("maritalStatus")} />
              </div>
            </CardContent>
          </Card>
        )}

        {step === 1 && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Alamat</Label>
                <Input {...register("address")} placeholder="Jl. ..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>RT</Label>
                  <Input {...register("rt")} />
                </div>
                <div className="space-y-2">
                  <Label>RW</Label>
                  <Input {...register("rw")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Pekerjaan</Label>
                <Input {...register("occupation")} />
              </div>
              <div className="space-y-2">
                <Label>No. Telepon</Label>
                <Input {...register("phone")} placeholder="0812..." />
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold">Konfirmasi Data</h3>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">NIK:</span>{" "}
                  {values.nik}
                </p>
                <p>
                  <span className="font-medium text-foreground">Nama:</span>{" "}
                  {values.name}
                </p>
                <p>
                  <span className="font-medium text-foreground">Alamat:</span>{" "}
                  {values.address} RT {values.rt}/RW {values.rw}
                </p>
                <p>
                  <span className="font-medium text-foreground">Pekerjaan:</span>{" "}
                  {values.occupation}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
          >
            Kembali
          </Button>
          {step < steps.length - 1 ? (
            <Button type="button" onClick={() => setStep((s) => s + 1)}>
              Lanjut
            </Button>
          ) : (
            <Button type="submit">Simpan</Button>
          )}
        </div>
      </form>
    </div>
  );
}
