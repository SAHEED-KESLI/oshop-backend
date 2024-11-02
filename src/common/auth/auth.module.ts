import { Module, Logger } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";

import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtStrategy } from "./strategy";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { UsersModule } from "src/models/users/users.module";

@Module({
  imports: [
    JwtModule,
    ConfigModule,
    PrismaModule,
    UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_EXPIRATION"),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthResolver, AuthService, Logger, JwtStrategy, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}
