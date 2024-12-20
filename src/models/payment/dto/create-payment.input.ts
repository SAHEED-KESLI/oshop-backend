import { InputType, Int, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class CreatePaymentInput {
  @Field()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
