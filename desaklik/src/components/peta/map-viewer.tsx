"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { mockParcels, villageBoundary } from "@/lib/data/peta";

// Fix for default marker icons in React Leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export default function MapViewer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const center: [number, number] = [-6.2095, 106.8455];

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden border">
      <MapContainer
        center={center}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polygon
          positions={villageBoundary}
          pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
        >
          <Popup>Batas Desa Maju Jaya</Popup>
        </Polygon>

        {mockParcels.map((parcel) => (
          <Marker
            key={parcel.id}
            position={parcel.coordinates}
            icon={icon}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-bold text-base mb-1">{parcel.parcelNumber}</h3>
                <p><strong>Pemilik:</strong> {parcel.owner}</p>
                <p><strong>Penggunaan:</strong> {parcel.landUse}</p>
                <p><strong>Luas:</strong> {parcel.area} m²</p>
                <p><strong>Lokasi:</strong> {parcel.location}</p>

                {parcel.householdData && (
                  <div className="mt-2 pt-2 border-t">
                    <h4 className="font-semibold text-xs text-muted-foreground uppercase mb-1">Data Rumah Tangga</h4>
                    <p><strong>Kepala Keluarga:</strong> {parcel.householdData.headOfHousehold}</p>
                    <p><strong>Jumlah Penghuni:</strong> {parcel.householdData.numberOfResidents} orang</p>
                    {parcel.householdData.economicVariables && (
                      <>
                        <p><strong>Hewan Peliharaan Elektronik:</strong> {parcel.householdData.economicVariables.electronicPets}</p>
                        <p><strong>Luas Kepemilikan Lahan:</strong> {parcel.householdData.economicVariables.landOwnershipArea} m²</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
