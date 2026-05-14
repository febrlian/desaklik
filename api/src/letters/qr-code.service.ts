import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as QRCode from 'qrcode';

@Injectable()
export class QRCodeService {
  private readonly logger = new Logger(QRCodeService.name);

  constructor(private readonly configService: ConfigService) {}

  /**
   * Generates a PNG buffer containing a QR code encoding the verification URL.
   * @param verificationToken Unique token for letter verification
   * @returns Buffer containing the PNG image
   */
  async generateQRCodeBuffer(verificationToken: string): Promise<Buffer> {
    try {
      const publicAppUrl = this.configService.get<string>('PUBLIC_APP_URL') || 'http://localhost:3000';
      const verificationUrl = `${publicAppUrl}/verifikasi?token=${verificationToken}`;

      this.logger.log(`Generating QR code for token: ${verificationToken}`);

      const buffer = await QRCode.toBuffer(verificationUrl, {
        type: 'png',
        width: 400,
        margin: 2,
        errorCorrectionLevel: 'H',
      });

      this.logger.log('QR code generated successfully');
      return buffer;
    } catch (error) {
      this.logger.error(`Failed to generate QR code: ${(error as Error).message}`);
      throw new Error(`QR code generation failed: ${(error as Error).message}`);
    }
  }
}
