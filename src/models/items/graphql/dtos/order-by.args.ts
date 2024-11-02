import { Field, InputType, PartialType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class ItemOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ItemOrderByWithRelationInputStrict,
      Prisma.ItemOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  quantity: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  productId: Prisma.SortOrder;
  cartId: Prisma.SortOrderInput;
  @Field(() => Prisma.SortOrder)
  cart: Prisma.CartOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ItemOrderByWithRelationInput extends PartialType(
  ItemOrderByWithRelationInputStrict
) {}

@InputType()
export class ItemOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
