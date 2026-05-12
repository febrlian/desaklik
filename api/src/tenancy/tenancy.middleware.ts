import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { TenantContext } from "./tenant-context.interface";
import { TenancyService } from "./tenancy.service";

type TenantRequest = Request & {
  tenantContext?: TenantContext;
};

@Injectable()
export class TenancyMiddleware implements NestMiddleware {
  constructor(private readonly tenancyService: TenancyService) {}

  use(request: TenantRequest, response: Response, next: NextFunction) {
    request.tenantContext = this.tenancyService.resolveTenantContext(request);
    response.locals.tenantContext = request.tenantContext;
    next();
  }
}
