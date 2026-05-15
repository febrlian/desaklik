import { Controller, Post, Body, HttpCode, HttpStatus, Get, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { TenantContext } from '../tenancy/tenant-context.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { LettersService } from './letters.service';

export class GenerateLetterDto {
  type!: string;
  citizenName!: string;
  purpose!: string;
  templateHtml!: string;
  templateData!: Record<string, any /* eslint-disable-line @typescript-eslint/no-explicit-any */>;
}

@Controller('letters')
export class LettersController {
  constructor(private readonly lettersService: LettersService, private readonly prisma: PrismaService) {}

  @Post('generate')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  async generateLetter(@Body() dto: GenerateLetterDto, @Req() req: Request & { tenantContext?: TenantContext }) {
    const tenantId = req.tenantContext?.id || 'unknown';
    const url = await this.lettersService.generateAndUploadLetter(dto.templateHtml, dto.templateData, tenantId, dto.citizenName || 'Unknown', dto.type || 'Surat Keterangan', dto.purpose || 'Keperluan Administrasi');
    return {
      success: true,
      data: { url },
    };
  }
}


@Controller('verify')
export class VerifyController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async verifyLetter(@Query('token') token: string) {
    if (!token) {
      return { success: false, data: { isValid: false } };
    }

    const letter = await this.prisma.letter.findUnique({
      where: { token },
    });

    if (!letter) {
      return { success: false, data: { isValid: false } };
    }

    return {
      success: true,
      data: {
        isValid: true,
        id: letter.id,
        type: letter.type,
        citizenName: letter.citizenName,
        status: letter.status,
        purpose: letter.purpose,
        updatedAt: letter.updatedAt.toISOString(),
      },
    };
  }
}
