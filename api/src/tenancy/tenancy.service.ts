import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { TenantContext } from "./tenant-context.interface";

@Injectable()
export class TenancyService {
  resolveTenantContext(request: Request): TenantContext {
    const tenantId = request.header("x-tenant-id") ?? undefined;
    const tenantSlug = request.header("x-tenant-slug") ?? undefined;

    return {
      id: tenantId,
      slug: tenantSlug,
      schemaName: "public",
    };
  }
}
