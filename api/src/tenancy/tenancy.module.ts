import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TenancyMiddleware } from "./tenancy.middleware";
import { TenancyService } from "./tenancy.service";

@Module({
  providers: [TenancyService, TenancyMiddleware],
  exports: [TenancyService],
})
export class TenancyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenancyMiddleware).forRoutes("*");
  }
}
