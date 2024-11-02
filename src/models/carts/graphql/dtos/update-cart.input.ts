import { CreateCartInput } from "./create-cart.input";
import { InputType, PartialType } from "@nestjs/graphql";
import { Cart } from "@prisma/client";

@InputType()
export class UpdateCartInput extends PartialType(CreateCartInput) {
  cartId: Cart["cartId"];
}
