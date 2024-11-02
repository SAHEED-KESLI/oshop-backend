import { Module } from "@nestjs/common";
import { CartsService } from "./graphql/carts.service";
import { CartsResolver } from "./graphql/carts.resolver";

@Module({
  providers: [CartsResolver, CartsService],
  exports: [CartsService],
})
export class CartsModule {}
