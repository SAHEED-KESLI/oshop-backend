import { CreateItemInput } from "./create-item.input";
import { InputType, PartialType } from "@nestjs/graphql";
import { Item } from "@prisma/client";

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  cartId: Item["cartId"];
  productId?: Item["productId"];
}
