import { Module } from '@nestjs/common';
import { LettersService } from './letters.service';
import { LettersController } from './letters.controller';
import { TemplateParserService } from './template-parser.service';
import { PdfGeneratorService } from './pdf-generator.service';
import { S3StorageService } from './s3-storage.service';
import { QRCodeService } from './qr-code.service';
import { VerifyController } from './letters.controller';

@Module({
  providers: [
    LettersService,
    TemplateParserService,
    PdfGeneratorService,
    S3StorageService,
    QRCodeService,
  ],
  controllers: [LettersController, VerifyController],
  exports: [LettersService],
})
export class LettersModule {}
