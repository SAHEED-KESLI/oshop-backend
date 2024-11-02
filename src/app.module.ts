import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./common/prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "./models/users/users.module";
import * as Joi from "joi";
import { AuthModule } from "./common/auth/auth.module";
import { CategoriesModule } from "./models/categories/categories.module";
import { ProductsModule } from "./models/products/products.module";
import { CartsModule } from "./models/carts/carts.module";
import { ItemsModule } from "./models/items/items.module";
import { PaymentModule } from "./models/payment/payment.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,
      fieldResolverEnhancers: ["guards"],
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      context: ({ req, res }) => ({ req, res }),
      //   buildSchemaOptions: {
      //      numberScalarMode: 'integer',
      //   },
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    JwtModule,
    CategoriesModule,
    ProductsModule,
    CartsModule,
    ItemsModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [JwtModule, ConfigModule, PrismaModule],
})
export class AppModule {}
