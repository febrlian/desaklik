import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid'; // need to install uuid

@Injectable()
export class S3StorageService {
  private readonly logger = new Logger(S3StorageService.name);
  private readonly s3Client: S3Client;
  private readonly bucketName: string;

  constructor(private configService: ConfigService) {
    this.bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME') || 'default-bucket';

    // In production, you typically rely on IAM roles, but for local/dev you might use explicit keys
    const region = this.configService.get<string>('AWS_REGION');
    const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');

    const config: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ = { region };

    if (accessKeyId && secretAccessKey) {
      config.credentials = {
        accessKeyId,
        secretAccessKey,
      };
    }

    this.s3Client = new S3Client(config);
  }

  /**
   * Uploads a file buffer to S3 and returns the public URL.
   * @param fileBuffer Buffer containing file data
   * @param folder Optional folder path in S3 (e.g., "letters/")
   * @param contentType MIME type of the file (e.g., "application/pdf")
   * @returns URL of the uploaded file
   */
  async uploadFile(fileBuffer: Buffer, folder: string = 'letters', contentType: string = 'application/pdf'): Promise<string> {
    const filename = `${folder}/${uuidv4()}.pdf`;

    try {
      this.logger.log(`Uploading file to S3: ${filename}`);

      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: filename,
        Body: fileBuffer,
        ContentType: contentType,
        // Optional: specify ACL if your bucket allows it, though it's often better to handle access via bucket policies
        // ACL: 'public-read',
      });

      await this.s3Client.send(command);

      // Construct the URL (assuming standard S3 format, may differ if using a custom domain or Supabase)
      const url = `https://${this.bucketName}.s3.${this.configService.get<string>('AWS_REGION')}.amazonaws.com/${filename}`;

      this.logger.log(`File uploaded successfully: ${url}`);
      return url;
    } catch (error) {
      this.logger.error(`Failed to upload file to S3: ${(error as Error).message}`);
      throw new Error(`S3 upload failed: ${(error as Error).message}`);
    }
  }
}
