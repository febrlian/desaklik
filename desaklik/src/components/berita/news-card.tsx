"use client";

import { News } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NewsCardProps {
  news: News;
  horizontal?: boolean;
}

export function NewsCard({ news, horizontal }: NewsCardProps) {
  if (horizontal) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="flex gap-3 p-3">
            <div className="h-20 w-20 shrink-0 rounded-md bg-muted flex items-center justify-center text-muted-foreground text-xs">
              IMG
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <Badge variant="secondary" className="text-[10px]">
                {news.category}
              </Badge>
              <h3 className="text-sm font-semibold line-clamp-2">{news.title}</h3>
              <p className="text-xs text-muted-foreground">
                {new Date(news.publishedAt).toLocaleDateString("id-ID")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="h-40 bg-muted flex items-center justify-center text-muted-foreground text-sm">
        IMG
      </div>
      <CardContent className="p-4 space-y-2">
        <Badge variant="secondary" className="text-[10px]">
          {news.category}
        </Badge>
        <h3 className="font-semibold text-sm line-clamp-2">{news.title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {news.excerpt}
        </p>
        <p className="text-[10px] text-muted-foreground">
          {new Date(news.publishedAt).toLocaleDateString("id-ID")} · {news.author}
        </p>
      </CardContent>
    </Card>
  );
}
