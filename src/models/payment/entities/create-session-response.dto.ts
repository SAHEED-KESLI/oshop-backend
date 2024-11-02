import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SessionResponse {
  @Field()
  url: string;
}
