import { Controller, Get, Post, Patch, Delete, Body, Param, Req, UseGuards, HttpCode, HttpStatus, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { NewsService, CreateNewsDto, UpdateNewsDto } from './news.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { TenantContext } from '../tenancy/tenant-context.interface';

type TenantRequest = Request & { tenantContext?: TenantContext };

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(300000) // 5 minutes
  async findAllPublished(@Req() req: TenantRequest) {
    const tenantId = req.tenantContext?.id || 'unknown';
    const news = await this.newsService.findAllPublished(tenantId);
    return {
      success: true,
      data: news,
    };
  }

  @Get(':slug')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(300000) // 5 minutes
  async findBySlug(@Param('slug') slug: string, @Req() req: TenantRequest) {
    const tenantId = req.tenantContext?.id || 'unknown';
    const news = await this.newsService.findBySlug(slug, tenantId);
    return {
      success: true,
      data: news,
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateNewsDto, @Req() req: TenantRequest) {
    const tenantId = req.tenantContext?.id || 'unknown';
    const news = await this.newsService.create({ ...dto, tenantId });
    return {
      success: true,
      data: news,
    };
  }

  @Patch(':slug')
  @UseGuards(JwtAuthGuard)
  async update(@Param('slug') slug: string, @Body() dto: UpdateNewsDto, @Req() req: TenantRequest) {
    const tenantId = req.tenantContext?.id || 'unknown';
    const news = await this.newsService.update(slug, tenantId, dto);
    return {
      success: true,
      data: news,
    };
  }

  @Delete(':slug')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('slug') slug: string, @Req() req: TenantRequest) {
    const tenantId = req.tenantContext?.id || 'unknown';
    await this.newsService.remove(slug, tenantId);
    return {
      success: true,
      message: 'News deleted successfully',
    };
  }
}
