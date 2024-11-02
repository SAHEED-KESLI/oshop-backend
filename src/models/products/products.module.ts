import { Module } from "@nestjs/common";
import { ProductsService } from "./graphql/products.service";
import { ProductsResolver } from "./graphql/products.resolver";

@Module({
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
