import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as session from "express-session";
import * as cookieParser from "cookie-parser";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();

  app.use(
    session({
      secret: configService.get<string>("JWT_SECRET"),
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(cookieParser());

  const port = configService.get<string>("PORT");

  await app.listen(port);
}
bootstrap();
