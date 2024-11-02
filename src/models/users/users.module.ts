import { Module } from "@nestjs/common";
import { UsersService } from "./graphql/users.service";
import { UsersResolver } from "./graphql/users.resolver";
import { PrismaModule } from "src/common/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
