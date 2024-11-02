import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class SignUpDto {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  readonly name: string;
}
