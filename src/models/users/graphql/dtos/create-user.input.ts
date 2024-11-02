import { Field, InputType, PickType } from "@nestjs/graphql";
import { User } from "../entity/user.entity";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput extends PickType(
  User,
  ["email", "name"],
  InputType
) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;
}
