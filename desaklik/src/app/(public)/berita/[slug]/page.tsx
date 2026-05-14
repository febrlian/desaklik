"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { fetchNewsBySlug } from "@/lib/api-client";
import { NewsDetail } from "@/components/berita/news-detail";

export default function PublicBeritaDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { data, isLoading, error } = useQuery({
    queryKey: ["news", slug],
    queryFn: () => fetchNewsBySlug(slug),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto text-sm text-muted-foreground">
          Memuat berita...
        </div>
      </div>
    );
  }

  if (error || !data?.data) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto text-sm text-destructive">
          Berita tidak ditemukan.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <NewsDetail news={data.data} onBack={() => router.push("/berita")} />
      </div>
    </div>
  );
}
