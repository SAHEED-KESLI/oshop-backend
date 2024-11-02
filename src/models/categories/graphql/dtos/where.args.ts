import { Field, InputType, PartialType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from "src/common/dtos/common.input";

@InputType()
export class CategoryWhereUniqueInput {
  id: number;
}

@InputType()
export class CategoryWhereInputStrict
  implements
    RestrictProperties<CategoryWhereInputStrict, Prisma.CategoryWhereInput>
{
  id: IntFilter;
  name: StringFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CategoryWhereInput[];
  OR: CategoryWhereInput[];
  NOT: CategoryWhereInput[];
}

@InputType()
export class CategoryWhereInput extends PartialType(CategoryWhereInputStrict) {}

@InputType()
export class CategoryListRelationFilter {
  every?: CategoryWhereInput;
  some?: CategoryWhereInput;
  none?: CategoryWhereInput;
}

@InputType()
export class CategoryRelationFilter {
  is?: CategoryWhereInput;
  isNot?: CategoryWhereInput;
}
