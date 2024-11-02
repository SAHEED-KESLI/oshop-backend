import { Field, InputType, PartialType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class CategoryOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CategoryOrderByWithRelationInputStrict,
      Prisma.CategoryOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;
  // Todo: Add below field decorator to the SortOrder properties.
  // @Field(() => Prisma.SortOrder)
}

@InputType()
export class CategoryOrderByWithRelationInput extends PartialType(
  CategoryOrderByWithRelationInputStrict
) {}

@InputType()
export class CategoryOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
