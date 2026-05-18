# DesaKlik Monorepo

## What is DesaKlik?

DesaKlik is a comprehensive **Village Management System** designed to digitize and streamline administrative processes at the local village level. It bridges the gap between digital governance and community services by providing a robust, scalable platform tailored for village administrations and their residents.

### The B2B2C Workflow

DesaKlik operates on a **B2B2C (Business-to-Business-to-Consumer)** model, creating a seamless flow of value across three primary stakeholders:

1. **The Platform Provider (B1 - DesaKlik)**
   - Provides the underlying infrastructure, software, and continuous maintenance as a platform offering.
   - Ensures high availability, data security, and scalability for multiple village tenants.

2. **The Village Administration (B2 - Local Government)**
   - Acts as the primary operator of the system. Village heads (Kepala Desa) and officials use the administrative dashboard to manage village data, process citizen requests, and oversee daily operations.
   - Core capabilities include automated document generation (e.g., official letters), demographic data management, and digital service delivery.

3. **The Villagers / Citizens (C - Consumers)**
   - The end-users of the system. Residents can access the platform via a mobile-friendly web app to request services digitally.
   - Features include requesting official letters, tracking the status of their administrative submissions, and communicating with the village office without needing to visit physically.

By integrating these three layers, DesaKlik modernizes local governance, reduces bureaucratic friction, and significantly improves public service delivery at the grassroots level.

## Getting Started

The monorepo contains a modern tech stack with a Next.js frontend and a NestJS backend powered by Prisma and PostgreSQL.

### Prerequisites

- Node.js 20+
- npm 10+
- Docker + Docker Compose

### Project Structure

- `desaklik/` — Next.js frontend
- `api/` — NestJS backend (Prisma + PostgreSQL)
- `docker-compose.yml` — local PostgreSQL service

### Environment Setup

Copy environment templates before running locally:

```bash
cp .env.example .env
cp api/.env.example api/.env
cp desaklik/.env.example desaklik/.env.local
```

Shared local defaults live in the root `.env` (database and service ports), while each app keeps its own runtime env file:

- `api/.env` for NestJS runtime settings (`DATABASE_URL`, JWT, CORS)
- `desaklik/.env.local` for browser-safe frontend values (`NEXT_PUBLIC_API_URL`)

### Install Dependencies

```bash
npm install
```

### Start Local Database

```bash
npm run db:up
```

### Prepare Database (Prisma)

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

### Run Apps

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run them individually:

```bash
npm run dev:web
npm run dev:api
```

### Local Service URLs

- Frontend: http://localhost:3000
- API health: http://localhost:4000/health
- PostgreSQL: localhost:5432

Quick health check:

```bash
curl http://localhost:4000/health
```

### Stop Database

```bash
npm run db:down
```
