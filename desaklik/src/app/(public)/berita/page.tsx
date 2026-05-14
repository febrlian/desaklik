"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/lib/api-client";
import { NewsCard } from "@/components/berita/news-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function PublicBeritaPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNews(),
  });

  const newsList = data?.data ?? [];

  const filtered = newsList.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Bale Warta</h1>
          <p className="text-sm text-muted-foreground">
            Berita dan pengumuman terbaru dari desa
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari berita..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {isLoading && (
          <div className="text-sm text-muted-foreground">Memuat berita...</div>
        )}

        {error && (
          <div className="text-sm text-destructive">
            Gagal memuat berita. Silakan coba lagi.
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((news) => (
            <a key={news.id} href={`/berita/${news.slug}`}>
              <NewsCard news={news} />
            </a>
          ))}
        </div>

        {filtered.length === 0 && !isLoading && (
          <div className="text-sm text-muted-foreground text-center py-8">
            Tidak ada berita yang ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}
