import { Injectable, Logger } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfGeneratorService {
  private readonly logger = new Logger(PdfGeneratorService.name);

  /**
   * Generates a PDF buffer from an HTML string using Puppeteer.
   * @param htmlContent The HTML content to convert to PDF
   * @returns Buffer containing the PDF data
   */
  async generatePdf(htmlContent: string): Promise<Buffer> {
    let browser: puppeteer.Browser | null = null;
    try {
      this.logger.log('Launching headless browser');
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // Required for many server environments (e.g. Docker)
      });

      const page = await browser.newPage();

      // Load HTML content
      await page.setContent(htmlContent, {
        waitUntil: 'domcontentloaded', // Wait until no network connections for 500ms
      });

      // Generate PDF
      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px',
        },
      });

      this.logger.log('PDF generated successfully');
      return Buffer.from(pdfBuffer);
    } catch (error) {
      this.logger.error(`Failed to generate PDF: ${(error as Error).message}`);
      throw new Error(`PDF generation failed: ${(error as Error).message}`);
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}
