import { z } from "zod";

export const letterSchema = z.object({
  type: z.enum([
    "SKUsaha",
    "Domisili",
    "Pengantar",
    "Tidak Mampu",
    "Kelahiran",
    "Kematian",
  ]),
  citizenId: z.string().min(1, "Warga wajib dipilih"),
  purpose: z.string().min(5, "Tujuan minimal 5 karakter"),
  notes: z.string().optional(),
});

export type LetterFormData = z.infer<typeof letterSchema>;
