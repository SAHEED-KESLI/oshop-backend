import { SignUpDto } from "./dto/signup.input";
import { BadRequestException, Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { Response } from "express";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";
import { LogInDto } from "./dto";
import { PrismaService } from "src/common/prisma/prisma.service";

export interface Payload {
  email: String;
  sub: number;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  private async generateToken(user: User) {
    const payload: Payload = { email: user.email, sub: user.id };

    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>("JWT_SECRET"),
      expiresIn: this.configService.get<string>("JWT_EXPIRATION"),
    });

    return { user, token };
  }

  async signUp(signUpInput: SignUpDto) {
    try {
      // Check user existence
      const userExist = await this.prisma.user.findUnique({
        where: {
          email: signUpInput.email,
        },
      });
      if (userExist) {
        throw new BadRequestException({ message: "Email already in use" });
      }
      // Hash password
      const hash = await argon.hash(signUpInput.password);
      const user = await this.prisma.user.create({
        data: {
          email: signUpInput.email,
          hashPassword: hash,
          name: signUpInput.name,
        },
      });
      delete user.hashPassword;
      return await this.generateToken(user);
    } catch (error) {
      throw new BadRequestException({ message: "Email already in use" });
    }
  }

  async logIn(logInInput: LogInDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: logInInput.email },
    });
    if (!user) {
      throw new BadRequestException({ message: "Credentials incorrect!" });
    }

    const passwordMatch = await argon.verify(
      user.hashPassword,
      logInInput.password
    );

    if (!passwordMatch) {
      throw new BadRequestException({ message: "Credentials incorrect!" });
    }
    delete user.hashPassword;
    return await this.generateToken(user);
  }
}
