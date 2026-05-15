# Agent Instructions

This repository is a monorepo consisting of a Next.js frontend (`desaklik`) and a NestJS backend (`api`).

## General Directives
- **Environment Network Issues**: The execution environment frequently encounters network timeouts and incomplete dependency installations when running `npm install` or `npm ci`. This can result in missing binaries (like `next` or `tsc` in `node_modules`). If you encounter missing dependency errors (like ESLint not being found), rerun `npm install`.
- **Cleanup**: Always clean up temporary workspace scripts (e.g., `patch.js`, `modify_page.py`, `benchmark.cjs`) used for file modifications before running pre-commit steps or submitting pull requests to prevent repository pollution.
- **Linting**: Both `api` and `desaklik` workspaces enforce strict linting, including `@typescript-eslint/no-explicit-any`. Use `// eslint-disable-next-line @typescript-eslint/no-explicit-any` when explicit `any` casting is strictly necessary to pass CI/CD.
- **Testing**: Currently, neither the `api` nor the `desaklik` workspace has dedicated automated tests (no `test` script in `package.json`). Keep this in mind when making changes.

## Setup Commands
To correctly set up the local environment variables for the monorepo, run the following sequential commands from the root directory:
```bash
cp .env.example .env
cp api/.env.example api/.env
cp desaklik/.env.example desaklik/.env.local
```

## Frontend Directives (`desaklik/`)
- **Next.js Version**: The project uses a non-standard Next.js version (v16.2.6) with breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.
- **React Imports**: Omit `import * as React from 'react'` in Next.js/React components. The modern JSX transform handles React imports implicitly, rendering manual imports as unnecessary code.
- **Icons**: The user prefers `lucide-react` for iconography. All new icons should use this library, and existing `@phosphor-icons/react` usage should be migrated away.
- **Performance**: To optimize performance, static arrays and their associated operations (e.g., `.map()`, `.find()`, `.filter()`) should be declared outside the component (at the module level) or cached using `useMemo` to prevent redundant re-allocation and re-computation during renders.
- **Images**: The Next.js configuration in `desaklik/next.config.ts` has `images: { unoptimized: true }` enabled.

## Backend Directives (`api/`)
- **Environment Variables**: The NestJS `api` uses `joi` in `AppModule` (`@nestjs/config`) for strict environment variable runtime validation.
- **Architecture**: Built with NestJS (v11), Prisma, Joi, and Passport-JWT for authentication. Includes a letter generation engine using `puppeteer` for rendering PDFs, `@aws-sdk/client-s3` for S3-compatible cloud storage, and `handlebars` for dynamic template parsing.
