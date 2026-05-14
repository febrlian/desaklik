"use client";

import { News } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface NewsDetailProps {
  news: News;
  onBack?: () => void;
}

export function NewsDetail({ news, onBack }: NewsDetailProps) {
  return (
    <div className="space-y-4">
      {onBack && (
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-1">
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Button>
      )}

      <div className="space-y-2">
        <Badge variant="secondary">{news.category}</Badge>
        <h1 className="text-xl font-bold">{news.title}</h1>
        <p className="text-sm text-muted-foreground">
          {new Date(news.publishedAt).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {news.author}
        </p>
      </div>

      <div className="h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
        {news.image ? (
          <div className="h-full w-full relative">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <span className="text-sm">Gambar Berita</span>
        )}
      </div>

      <Card>
        <CardContent className="p-4">
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {news.content}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
