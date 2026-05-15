# AGENTS.md Improvement Spec

## Current State Evaluation

### What's Good
- The frontend Next.js directory (`desaklik/`) has a minimal `AGENTS.md` specifying the non-standard Next.js version and pointing out where to find documentation.
- A new root `AGENTS.md` has just been created that consolidates rules and directives across both workspaces.

### What's Missing
- The `api/` directory did not have its own `AGENTS.md` (or the instructions were omitted or mislocated).
- Detailed information about the letter generation engine (Puppeteer, Handlebars, AWS SDK S3) was not explicitly codified in `api/AGENTS.md`.
- No `.ona/skills/` or `.cursor/rules/` folders are present, so all directives must live in `AGENTS.md`.

### What's Wrong
- Prior to the root `AGENTS.md` creation, there was no centralized repository of agent directives.
- The `desaklik/AGENTS.md` lacked important details like:
  - Using `lucide-react` instead of `@phosphor-icons/react`.
  - Omitting React imports.
  - Performance optimization guidelines (moving static arrays out of components).
  - Information about the `unoptimized: true` image setting.

## Improvement Spec

### 1. Update Root `AGENTS.md`
The root `AGENTS.md` file has been created to include:
- Instructions on setup (`cp .env...`).
- Environment network issue handling (`npm install` retries).
- Cleanup rules for temporary scripts.
- General linting rules (`@typescript-eslint/no-explicit-any`).

### 2. Update `desaklik/AGENTS.md`
Enhance the existing `desaklik/AGENTS.md` to include:
- The existing Next.js rule.
- Use `lucide-react` for all icons; migrate away from `@phosphor-icons/react`.
- Omit explicit `import * as React from 'react'`.
- Static arrays performance optimization: declare outside component or use `useMemo`.
- Note about `images: { unoptimized: true }` in `next.config.ts`.

### 3. Create `api/AGENTS.md`
Create a dedicated `AGENTS.md` for the NestJS backend including:
- Joi validation for environment variables.
- Letter generation engine specifics: uses Puppeteer for PDFs, AWS SDK for S3 storage, Handlebars for templates.
- NestJS v11, Prisma, Passport-JWT architecture details.
