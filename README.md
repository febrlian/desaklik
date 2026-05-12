# DesaKlik Monorepo

Phase 2 introduces a backend foundation with a NestJS API, PostgreSQL, and Prisma while keeping the existing Next.js frontend in `desaklik`.

## Prerequisites

- Node.js 20+
- npm 10+
- Docker + Docker Compose

## Project Structure

- `desaklik/` — Next.js frontend
- `api/` — NestJS backend (Prisma + PostgreSQL)
- `docker-compose.yml` — local PostgreSQL service

## Environment Setup

Copy environment templates before running locally:

```bash
cp .env.example .env
cp api/.env.example api/.env
cp desaklik/.env.example desaklik/.env.local
```

## Install Dependencies

```bash
npm install
```

## Start Local Database

```bash
npm run db:up
```

## Prepare Database (Prisma)

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

## Run Apps

Run both frontend and backend:

```bash
npm run dev
```

Or run individually:

```bash
npm run dev:web
npm run dev:api
```

## Local Service URLs

- Frontend: http://localhost:3000
- API health: http://localhost:4000/health
- PostgreSQL: localhost:5432

## Stop Database

```bash
npm run db:down
```
