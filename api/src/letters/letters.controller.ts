import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { LettersService } from './letters.service';

export class GenerateLetterDto {
  templateHtml!: string;
  templateData!: Record<string, any /* eslint-disable-line @typescript-eslint/no-explicit-any */>;
}

@Controller('letters')
export class LettersController {
  constructor(private readonly lettersService: LettersService) {}

  @Post('generate')
  @HttpCode(HttpStatus.CREATED)
  async generateLetter(@Body() dto: GenerateLetterDto) {
    const url = await this.lettersService.generateAndUploadLetter(dto.templateHtml, dto.templateData);
    return {
      success: true,
      data: { url },
    };
  }
}
