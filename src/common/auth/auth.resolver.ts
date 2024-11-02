import { ConfigModule, ConfigService } from "@nestjs/config";
import { Resolver, Mutation, Args, Context } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { Auth } from "./entities/auth.entity";
import { LogInDto, SignUpDto } from "./dto";

import { Response } from "express";
import { UseGuards } from "@nestjs/common";

import { GqlAuthGuard } from "./guards";
import { User } from "src/models/users/graphql/entity/user.entity";

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async signUp(
    @Args("signUpData") signUpInput: SignUpDto,
    @Context() context: { res: Response }
  ) {
    const { user, token } = await this.authService.signUp(signUpInput);
    const res = context.res;

    res.cookie("Authentication", token, { httpOnly: true });
    return user;
  }

  @Mutation(() => User)
  async logIn(
    @Args("logInData") logInInput: LogInDto,
    @Context() context: { res: Response }
  ) {
    const { user, token } = await this.authService.logIn(logInInput);
    const res = context.res;

    res.cookie("Authentication", token, { httpOnly: true });
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async logOut(@Context() context: { res: Response }) {
    const res = context.res;

    res.cookie("Authentication", "", { httpOnly: true, expires: new Date() });
    return "Successfully logged out";
  }
}
