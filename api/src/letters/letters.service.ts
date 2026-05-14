import { Injectable, Logger } from '@nestjs/common';
import { TemplateParserService } from './template-parser.service';
import { PdfGeneratorService } from './pdf-generator.service';
import { S3StorageService } from './s3-storage.service';

@Injectable()
export class LettersService {
  private readonly logger = new Logger(LettersService.name);

  constructor(
    private readonly templateParserService: TemplateParserService,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly s3StorageService: S3StorageService,
  ) {}

  /**
   * Generates a PDF letter from a template and data, then uploads it to S3.
   * @param templateHtml The HTML template string with variables
   * @param templateData The data to inject into the template
   * @returns The S3 URL of the generated PDF
   */
  async generateAndUploadLetter(templateHtml: string, templateData: Record<string, any /* eslint-disable-line @typescript-eslint/no-explicit-any */>): Promise<string> {
    try {
      this.logger.log('Starting letter generation process');

      // 1. Parse template
      const parsedHtml = this.templateParserService.parse(templateHtml, templateData);

      // 2. Generate PDF
      const pdfBuffer = await this.pdfGeneratorService.generatePdf(parsedHtml);

      // 3. Upload to S3
      const s3Url = await this.s3StorageService.uploadFile(pdfBuffer, 'generated-letters');

      this.logger.log(`Letter generated and uploaded successfully: ${s3Url}`);
      return s3Url;
    } catch (error) {
      this.logger.error(`Failed to process letter: ${(error as Error).message}`);
      throw error;
    }
  }
}
