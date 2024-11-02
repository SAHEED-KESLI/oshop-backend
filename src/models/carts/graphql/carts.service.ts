import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/common/prisma/prisma.service";
import { CreateCartInput } from "./dtos/create-cart.input";
import { UpdateCartInput } from "./dtos/update-cart.input";

@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCartInput: CreateCartInput) {
    return this.prisma.cart.create({
      data: createCartInput,
    });
  }

  // findOne(args: FindUniqueCartArgs) {
  //   return this.prisma.cart.findUnique(args);
  // }

  update(updateCartInput: UpdateCartInput) {
    const { cartId, ...data } = updateCartInput;
    return this.prisma.cart.update({
      where: { cartId },
      data: data,
    });
  }

  // remove(args: FindUniqueCartArgs) {
  //   return this.prisma.cart.delete(args);
  // }
}
