import { InputType, PartialType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { IntFilter, RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class CartWhereUniqueInput {
  id: number;
}

@InputType()
export class CartWhereInputStrict
  implements
    RestrictProperties<
      CartWhereInputStrict,
      Omit<Prisma.CartWhereInput, "items">
    >
{
  cartId: IntFilter;
  // items: ItemListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CartWhereInput[];
  OR: CartWhereInput[];
  NOT: CartWhereInput[];
}

@InputType()
export class CartWhereInput extends PartialType(CartWhereInputStrict) {}

@InputType()
export class CartListRelationFilter {
  every?: CartWhereInput;
  some?: CartWhereInput;
  none?: CartWhereInput;
}

@InputType()
export class CartRelationFilter {
  is?: CartWhereInput;
  isNot?: CartWhereInput;
}
