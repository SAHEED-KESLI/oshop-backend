import { Field, InputType, PartialType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class ProductOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ProductOrderByWithRelationInputStrict,
      Omit<Prisma.ProductOrderByWithRelationInput, "cart">
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  category: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  imageUrl: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  price: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  title: Prisma.SortOrder;

  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class ProductOrderByWithRelationInput extends PartialType(
  ProductOrderByWithRelationInputStrict
) {}

@InputType()
export class ProductOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
