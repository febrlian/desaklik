export type UserRole = "admin" | "operator" | "citizen";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  tenantId: string;
}

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  region: string;
  district: string;
  village: string;
  theme: "light" | "dark" | "system";
}

export interface Citizen {
  id: string;
  nik: string;
  name: string;
  birthPlace: string;
  birthDate: string;
  gender: "Laki-laki" | "Perempuan";
  address: string;
  rt: string;
  rw: string;
  religion: string;
  maritalStatus: string;
  occupation: string;
  phone?: string;
  status: "Aktif" | "Pindah" | "Meninggal";
}

export type LetterType =
  | "SKUsaha"
  | "Domisili"
  | "Pengantar"
  | "Tidak Mampu"
  | "Kelahiran"
  | "Kematian";

export type LetterStatus =
  | "Diajukan"
  | "Diproses"
  | "Menunggu TTD"
  | "Selesai"
  | "Ditolak";

export interface Letter {
  id: string;
  type: LetterType;
  citizenId: string;
  citizenName: string;
  status: LetterStatus;
  createdAt: string;
  updatedAt: string;
  purpose: string;
  notes?: string;
}

export interface LetterTimeline {
  id: string;
  letterId: string;
  status: LetterStatus;
  timestamp: string;
  actor: string;
  note?: string;
}

export interface News {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  author: string;
  publishedAt: string;
  category: string;
  isPublished: boolean;
}

export interface Asset {
  id: string;
  name: string;
  category: string;
  description: string;
  location: string;
  condition: "Baik" | "Rusak Ringan" | "Rusak Berat";
  status: "Tersedia" | "Dipinjam" | "Perbaikan";
  images: string[];
  specs: Record<string, string>;
  acquisitionDate: string;
  value: number;
}

export interface BorrowRequest {
  id: string;
  assetId: string;
  assetName: string;
  citizenId: string;
  citizenName: string;
  startDate: string;
  endDate: string;
  purpose: string;
  status: "Diajukan" | "Disetujui" | "Ditolak" | "Selesai";
}

export interface Parcel {
  id: string;
  parcelNumber: string;
  owner: string;
  area: number;
  landUse: string;
  location: string;
  coordinates: [number, number];
  householdData?: {
    headOfHousehold: string;
    numberOfResidents: number;
    economicVariables?: {
      electronicPets: number;
      landOwnershipArea: number;
    };
  };
}
