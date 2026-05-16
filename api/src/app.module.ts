import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-redis-yet";
import * as Joi from "joi";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { TenancyModule } from "./tenancy/tenancy.module";
import { LettersModule } from './letters/letters.module';
import { NewsModule } from './news/news.module';

// Regex for validating ms library formats
// Matches optional negative sign, integer or decimal number, optional space, and valid unit
const MS_FORMAT_REGEX = /^-?\d+(?:\.\d+)?\s*(?:msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", "../.env"],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid("development", "test", "production")
          .default("development"),
        PORT: Joi.number().port().default(4000),
        DATABASE_URL: Joi.string().uri().required(),
        JWT_SECRET: Joi.string().min(16).required(),
        JWT_REFRESH_SECRET: Joi.string().min(16).required(),
        JWT_EXPIRES_IN: Joi.string()
          .pattern(MS_FORMAT_REGEX)
          .default("15m")
          .messages({
            'string.pattern.base': 'JWT_EXPIRES_IN must be a valid time format (e.g. 15m, 1h, 7d)'
          }),
        JWT_REFRESH_EXPIRES_IN: Joi.string()
          .pattern(MS_FORMAT_REGEX)
          .default("7d")
          .messages({
            'string.pattern.base': 'JWT_REFRESH_EXPIRES_IN must be a valid time format (e.g. 15m, 1h, 7d)'
          }),
        CORS_ORIGIN: Joi.string().default("http://localhost:3000"),
        AWS_REGION: Joi.string().default("us-east-1"),
        AWS_ACCESS_KEY_ID: Joi.string().optional(),
        AWS_SECRET_ACCESS_KEY: Joi.string().optional(),

        AWS_S3_BUCKET_NAME: Joi.string().optional(),
        REDIS_HOST: Joi.string().default('localhost'),
        REDIS_PORT: Joi.number().default(6379),
      }),
    }),

    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        url: `redis://${configService.get('REDIS_HOST', 'localhost')}:${configService.get('REDIS_PORT', 6379)}`,
        ttl: 60 * 1000, // 1 minute default TTL
      }),
      inject: [ConfigService],
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    TenancyModule,
    LettersModule,
    NewsModule,
  ],
})
export class AppModule {}
