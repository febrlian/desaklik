"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface QRCodeDisplayProps {
  qrCodeUrl?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-64 w-64",
};

export function QRCodeDisplay({ qrCodeUrl, size = "md" }: QRCodeDisplayProps) {
  const [open, setOpen] = useState(false);

  if (!qrCodeUrl) {
    return (
      <div
        className={`${sizeMap[size]} bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground`}
      >
        QR
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button className="block">
            <div className={`${sizeMap[size]} relative inline-block`}>
              <Image
                src={qrCodeUrl}
                alt="QR Code Verifikasi"
                fill
                className="object-contain rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>
          </button>
        }
      />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Kode QR Verifikasi</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="h-64 w-64 relative inline-block">
            <Image
              src={qrCodeUrl}
              alt="QR Code Verifikasi"
              fill
              className="object-contain rounded-lg border"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Pindai kode QR ini untuk memverifikasi keaslian surat.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
