import { Field, InputType, PartialType } from "@nestjs/graphql";
import { User } from "../entity/user.entity";

@InputType()
export class UpdateUserInput extends PartialType(User) {
  // @Field({ nullable: true })
  // id: User["id"];
  bio?: string;
  email?: string;
  fullname?: string;
  image?: string;
}
