import { Field, ObjectType } from "@nestjs/graphql";
import { Product as ProductType } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@ObjectType()
export class Product implements RestrictProperties<Product, ProductType> {
  @Field({ nullable: true })
  id: number;
  category: string;
  imageUrl: string;
  price: number;
  title: string;

  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
