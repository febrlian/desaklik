import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface CreateNewsDto {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  author: string;
  publishedAt: Date;
  category: string;
  isPublished?: boolean;
  tenantId: string;
}

export interface UpdateNewsDto {
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  author?: string;
  publishedAt?: Date;
  category?: string;
  isPublished?: boolean;
}

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateNewsDto) {
    return this.prisma.news.create({
      data: {
        slug: dto.slug,
        title: dto.title,
        excerpt: dto.excerpt,
        content: dto.content,
        image: dto.image,
        author: dto.author,
        publishedAt: dto.publishedAt,
        category: dto.category,
        isPublished: dto.isPublished ?? false,
        tenantId: dto.tenantId,
      },
    });
  }

  async findAllPublished(tenantId: string) {
    return this.prisma.news.findMany({
      where: { tenantId, isPublished: true },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findBySlug(slug: string, tenantId: string) {
    const news = await this.prisma.news.findFirst({
      where: { slug, tenantId, isPublished: true },
    });

    if (!news) {
      throw new NotFoundException(`News with slug ${slug} not found`);
    }

    return news;
  }

  async findAll(tenantId: string) {
    return this.prisma.news.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(slug: string, tenantId: string, dto: UpdateNewsDto) {
    const news = await this.prisma.news.findFirst({
      where: { slug, tenantId },
    });

    if (!news) {
      throw new NotFoundException(`News with slug ${slug} not found`);
    }

    return this.prisma.news.update({
      where: { id: news.id },
      data: dto,
    });
  }

  async remove(slug: string, tenantId: string) {
    const news = await this.prisma.news.findFirst({
      where: { slug, tenantId },
    });

    if (!news) {
      throw new NotFoundException(`News with slug ${slug} not found`);
    }

    return this.prisma.news.delete({
      where: { id: news.id },
    });
  }
}
