"use client";

import { useState } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function LoginPage() {
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = login(email, password);
    setLoading(false);
    if (ok) {
      toast.success("Login berhasil");
      window.location.href = "/dashboard";
    } else {
      toast.error("Email atau password salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-3">
            DK
          </div>
          <CardTitle className="text-lg">DesaKlik</CardTitle>
          <p className="text-sm text-muted-foreground">
            Masuk ke sistem administrasi desa
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="nama@desa.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Memuat..." : "Masuk"}
            </Button>
          </form>
          <div className="mt-4 text-xs text-muted-foreground text-center space-y-1">
            <p>Akun demo:</p>
            <p>Admin: lurah@desaklik.id / password</p>
            <p>Operator: sekdes@desaklik.id / password</p>
            <p>Warga: ahmad@warga.id / password</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
