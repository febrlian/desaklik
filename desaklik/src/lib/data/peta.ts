import { Parcel } from "@/types";

export const villageBoundary: [number, number][] = [
  [-6.2080, 106.8440],
  [-6.2080, 106.8470],
  [-6.2110, 106.8470],
  [-6.2110, 106.8440]
];

export const mockParcels: Parcel[] = [
  {
    id: "P001",
    parcelNumber: "123.456.001",
    owner: "Ahmad Sudirman",
    area: 450,
    landUse: "Pemukiman",
    location: "RT 001 / RW 002",
    coordinates: [-6.2088, 106.8456],
    householdData: {
      headOfHousehold: "Ahmad Sudirman",
      numberOfResidents: 4,
      economicVariables: {
        electronicPets: 2,
        landOwnershipArea: 450
      }
    }
  },
  {
    id: "P002",
    parcelNumber: "123.456.002",
    owner: "Siti Aminah",
    area: 320,
    landUse: "Pemukiman",
    location: "RT 001 / RW 002",
    coordinates: [-6.209, 106.8458],
    householdData: {
      headOfHousehold: "Siti Aminah",
      numberOfResidents: 3,
      economicVariables: {
        electronicPets: 0,
        landOwnershipArea: 320
      }
    }
  },
  {
    id: "P003",
    parcelNumber: "123.456.010",
    owner: "Budi Santoso",
    area: 1200,
    landUse: "Pertanian",
    location: "RT 003 / RW 001",
    coordinates: [-6.21, 106.846],
  },
  {
    id: "P004",
    parcelNumber: "123.456.015",
    owner: "Dewi Lestari",
    area: 500,
    landUse: "Pemukiman",
    location: "RT 002 / RW 003",
    coordinates: [-6.2095, 106.8454],
    householdData: {
      headOfHousehold: "Andi Permana",
      numberOfResidents: 5,
      economicVariables: {
        electronicPets: 1,
        landOwnershipArea: 500
      }
    }
  },
  {
    id: "P005",
    parcelNumber: "123.456.020",
    owner: "Eko Prasetyo",
    area: 800,
    landUse: "Perdagangan",
    location: "RT 004 / RW 002",
    coordinates: [-6.2085, 106.8462],
  },
];
