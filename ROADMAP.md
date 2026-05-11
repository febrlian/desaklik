# DesaKlik Production Roadmap

## Phase 1: Foundation (Current Status)
- [x] Analyze Stitch Design Source
- [x] Define System Architecture & ERD
- [x] Configure Base Next.js Environment & Tailwind Setup
- [x] Implement Dashboard Shell
- [x] Scaffold Citizen Management (WargaHub)
- [x] Scaffold Letter Generation (SuratInstan)
- [x] Initial Docker & CI/CD configuration

## Phase 2: Backend Integration & Authentication
- [ ] Connect NestJS API endpoints with Prisma models
- [ ] Implement NextAuth.js / Auth.js with JWT & Role-Based Access Control
- [ ] Configure PostgreSQL Multi-Schema isolation (Tenant per Village)
- [ ] Connect frontend tables to real data via TanStack Query

## Phase 3: Letter Generation Engine Complete
- [ ] Implement Puppeteer PDF Generation Service in NestJS
- [ ] Store generated letters in S3 bucket (e.g. AWS / Supabase Storage)
- [ ] Build robust dynamic variable parser for templates

## Phase 4: Citizen Portal & Public Access
- [ ] Implement PWA features for mobile-first portal
- [ ] Enable QR Code generation and verification for letters
- [ ] Launch Bale Warta (Public News Feed) reading interface

## Phase 5: GIS & Advanced Modules
- [ ] Integrate Mapbox or Leaflet for 'Peta Kita' GIS module
- [ ] Plot village boundaries and properties

## Phase 6: Production Launch
- [ ] Security Audits & Load Testing
- [ ] Configure Redis Caching for settings and templates
- [ ] Vercel/Railway Production Deployment
