import { Module } from "@nestjs/common";
import { ItemsService } from "./graphql/items.service";
import { ItemsResolver } from "./graphql/items.resolver";

@Module({
  providers: [ItemsResolver, ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
