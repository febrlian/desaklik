import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Controller("health")
export class HealthController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async checkHealth() {
    let database: "up" | "down" = "up";

    try {
      await this.prismaService.$queryRaw`SELECT 1`;
    } catch {
      database = "down";
    }

    return {
      status: "ok",
      service: "desaklik-api",
      database,
      timestamp: new Date().toISOString(),
    };
  }
}
