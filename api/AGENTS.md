# Backend Agent Directives

- **Architecture**: Built with NestJS (v11), Prisma, Joi, and Passport-JWT for authentication.
- **Environment Variables**: Uses `joi` in `AppModule` (`@nestjs/config`) for strict environment variable runtime validation.
- **Letter Generation Engine**: Uses `puppeteer` for rendering PDFs, `@aws-sdk/client-s3` for S3-compatible cloud storage, and `handlebars` for dynamic template parsing.
- **Linting**: Enforces strict linting, including `@typescript-eslint/no-explicit-any`. Use `// eslint-disable-next-line @typescript-eslint/no-explicit-any` when explicit `any` casting is strictly necessary to pass CI/CD.
