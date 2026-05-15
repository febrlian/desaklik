import { Test, TestingModule } from '@nestjs/testing';
import { LettersService } from './letters.service';
import { TemplateParserService } from './template-parser.service';
import { PdfGeneratorService } from './pdf-generator.service';
import { S3StorageService } from './s3-storage.service';
import { QRCodeService } from './qr-code.service';
import { PrismaService } from '../prisma/prisma.service';

describe('LettersService', () => {
  let service: LettersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LettersService,
        { provide: TemplateParserService, useValue: {} },
        { provide: PdfGeneratorService, useValue: {} },
        { provide: S3StorageService, useValue: {} },
        { provide: QRCodeService, useValue: {} },
        { provide: PrismaService, useValue: {} }
      ],
    }).compile();

    service = module.get<LettersService>(LettersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
