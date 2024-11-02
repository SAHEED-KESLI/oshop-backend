import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CartsService } from "./carts.service";
import { Cart } from "./entity/cart.entity";

import { CreateCartInput } from "./dtos/create-cart.input";
import { UpdateCartInput } from "./dtos/update-cart.input";
import { PrismaService } from "src/common/prisma/prisma.service";

@Resolver(() => Cart)
export class CartsResolver {
  constructor(
    private readonly cartsService: CartsService,
    private readonly prisma: PrismaService
  ) {}

  @Mutation(() => Cart)
  createCart(@Args("createCartInput") args: CreateCartInput) {
    return this.cartsService.create(args);
  }

  // @Query(() => Cart, { name: "cart" })
  // findOne(@Args() args: FindUniqueCartArgs) {
  //   return this.cartsService.findOne(args);
  // }

  @Mutation(() => Cart)
  async updateCart(@Args("updateCartInput") args: UpdateCartInput) {
    return this.cartsService.update(args);
  }

  // @Mutation(() => Cart)
  // async removeCart(@Args() args: FindUniqueCartArgs) {
  //   return this.cartsService.remove(args);
  // }
}
