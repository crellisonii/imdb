import { Field, InputType } from "type-graphql";

@InputType()
export class ReviewInput {
  @Field(type => String)
  id: string;

  @Field(type => String)
  language: string;
}
