import { Field, ObjectType } from "@nestjs/graphql";
import { Cart as CartType } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@ObjectType()
export class Cart implements RestrictProperties<Cart, CartType> {
  @Field({ nullable: true })
  cartId: number;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
