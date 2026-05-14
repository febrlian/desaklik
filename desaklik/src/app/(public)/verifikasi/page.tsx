"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { verifyLetter } from "@/lib/api-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

function VerifikasiContent() {
  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get("token");

  const [token, setToken] = useState(tokenFromUrl || "");
  const [result, setResult] = useState<{
    isValid: boolean;
    id: string;
    type: string;
    citizenName: string;
    status: string;
    purpose: string;
    updatedAt: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = async (verifyToken: string) => {
    if (!verifyToken.trim()) return;
    setLoading(true);
    setError(false);
    setResult(null);

    try {
      const response = await verifyLetter(verifyToken);
      setResult(response.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tokenFromUrl) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleVerify(tokenFromUrl);
    }
  }, [tokenFromUrl]);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold">Verifikasi Surat</h1>
          <p className="text-sm text-muted-foreground">
            Verifikasi keaslian surat keterangan desa
          </p>
        </div>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-2">
              <Label>Kode Verifikasi</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Masukkan token verifikasi..."
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleVerify(token);
                  }}
                />
                <Button
                  onClick={() => handleVerify(token)}
                  disabled={loading || !token.trim()}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Periksa"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {result.isValid ? (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <CardTitle className="text-base text-green-700">
                      Surat Terverifikasi
                    </CardTitle>
                  </>
                ) : (
                  <>
                    <XCircle className="h-6 w-6 text-red-500" />
                    <CardTitle className="text-base text-red-700">
                      Surat Tidak Valid
                    </CardTitle>
                  </>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.isValid ? (
                <>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Jenis Surat</span>
                    <span className="font-medium">{result.type}</span>
                    <span className="text-muted-foreground">Pemohon</span>
                    <span className="font-medium">{result.citizenName}</span>
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium">{result.status}</span>
                    <span className="text-muted-foreground">Tujuan</span>
                    <span className="font-medium">{result.purpose}</span>
                    <span className="text-muted-foreground">
                      Terakhir Diperbarui
                    </span>
                    <span className="font-medium">
                      {new Date(result.updatedAt).toLocaleDateString("id-ID")}
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Token verifikasi tidak ditemukan dalam sistem. Pastikan kode
                  yang dimasukkan sudah benar.
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {error && (
          <Card className="border-destructive">
            <CardContent className="p-4">
              <p className="text-sm text-destructive">
                Terjadi kesalahan saat memverifikasi. Silakan coba lagi.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default function PublicVerifikasiPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background p-4 flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      }
    >
      <VerifikasiContent />
    </Suspense>
  );
}
