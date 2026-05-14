import { Module } from '@nestjs/common';
import { LettersService } from './letters.service';
import { LettersController } from './letters.controller';
import { TemplateParserService } from './template-parser.service';
import { PdfGeneratorService } from './pdf-generator.service';
import { S3StorageService } from './s3-storage.service';

@Module({
  providers: [
    LettersService,
    TemplateParserService,
    PdfGeneratorService,
    S3StorageService,
  ],
  controllers: [LettersController],
  exports: [LettersService],
})
export class LettersModule {}
