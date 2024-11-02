import { InputType, PickType } from "@nestjs/graphql";
import { Cart } from "../entity/cart.entity";

@InputType()
export class CreateCartInput extends PickType(Cart, ["cartId"], InputType) {}
