import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { TenancyModule } from "./tenancy/tenancy.module";

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
      }),
    }),
    PrismaModule,
    HealthModule,
    AuthModule,
    TenancyModule,
  ],
})
export class AppModule {}
