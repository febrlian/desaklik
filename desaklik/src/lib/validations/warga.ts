import { z } from "zod";

export const citizenSchema = z.object({
  nik: z
    .string()
    .min(16, "NIK harus 16 digit")
    .max(16, "NIK harus 16 digit")
    .regex(/^\d+$/, "NIK hanya boleh angka"),
  name: z.string().min(2, "Nama minimal 2 karakter"),
  birthPlace: z.string().min(1, "Tempat lahir wajib diisi"),
  birthDate: z.string().min(1, "Tanggal lahir wajib diisi"),
  gender: z.enum(["Laki-laki", "Perempuan"]),
  address: z.string().min(5, "Alamat minimal 5 karakter"),
  rt: z.string().min(1, "RT wajib diisi"),
  rw: z.string().min(1, "RW wajib diisi"),
  religion: z.string().min(1, "Agama wajib diisi"),
  maritalStatus: z.string().min(1, "Status perkawinan wajib diisi"),
  occupation: z.string().min(1, "Pekerjaan wajib diisi"),
  phone: z.string().optional(),
  status: z.enum(["Aktif", "Pindah", "Meninggal"]).default("Aktif"),
});

export type CitizenFormData = z.infer<typeof citizenSchema>;
