import { Injectable, Logger } from '@nestjs/common';
import { TemplateParserService } from './template-parser.service';
import { PdfGeneratorService } from './pdf-generator.service';
import { S3StorageService } from './s3-storage.service';
import { QRCodeService } from './qr-code.service';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LettersService {
  private readonly logger = new Logger(LettersService.name);

  constructor(
    private readonly templateParserService: TemplateParserService,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly s3StorageService: S3StorageService,
    private readonly qrCodeService: QRCodeService,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Generates a PDF letter from a template and data, then uploads it to S3.
   * @param templateHtml The HTML template string with variables
   * @param templateData The data to inject into the template
   * @returns The S3 URL of the generated PDF
   */

  async generateAndUploadLetter(
    templateHtml: string,
    templateData: Record<string, any /* eslint-disable-line @typescript-eslint/no-explicit-any */>,
    tenantId: string,
    citizenName: string,
    type: string,
    purpose: string
  ): Promise<string> {
    try {
      this.logger.log('Starting letter generation process');

      const token = uuidv4();

      const qrCodeBuffer = await this.qrCodeService.generateQRCodeBuffer(token);
      const qrCodeBase64 = `data:image/png;base64,${qrCodeBuffer.toString('base64')}`;

      const dataWithQr = {
        ...templateData,
        qrCodeImage: qrCodeBase64,
        verificationToken: token,
      };

      const parsedHtml = this.templateParserService.parse(templateHtml, dataWithQr);
      const pdfBuffer = await this.pdfGeneratorService.generatePdf(parsedHtml);
      const s3Url = await this.s3StorageService.uploadFile(pdfBuffer, 'generated-letters');

      await this.prisma.letter.create({
        data: {
          token,
          type,
          citizenName,
          purpose,
          tenantId,
        },
      });

      this.logger.log(`Letter generated and uploaded successfully: ${s3Url}`);
      return s3Url;
    } catch (error) {
      this.logger.error(`Failed to process letter: ${(error as Error).message}`);
      throw error;
    }
  }
}
