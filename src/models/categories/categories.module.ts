import { Module } from "@nestjs/common";
import { CategoriesService } from "./graphql/categories.service";
import { CategoriesResolver } from "./graphql/categories.resolver";
import { PrismaModule } from "src/common/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [CategoriesResolver, CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
