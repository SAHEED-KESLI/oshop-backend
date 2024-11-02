import { GetUser } from "./../../../decorator/get-user.decorator";
import { UpdateUserInput } from "./dtos/update-user.input";
import { FindUniqueUserArgs, FindManyUserArgs } from "./dtos/find.args";
import { UseGuards } from "@nestjs/common";
import { User } from "./entity/user.entity";
import { UsersService } from "./users.service";
import { GqlAuthGuard } from "src/common/auth/guards/graphql-auth.guard";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [User], { name: "users" })
  findAll(@Args() args: FindManyUserArgs) {
    return this.userService.findAll(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { name: "user" })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.userService.findOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async updateUser(
    @Args("updateUserInput") args: UpdateUserInput,
    @GetUser() user: User
  ) {
    return this.userService.update(args, user.id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async removeUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.remove(args);
  }
}
