import { Field, InputType } from "type-graphql";

@InputType()
export class SearchInput {
  @Field(type => String)
  expression: string;
  @Field(type => String, { nullable: true, defaultValue: "en" })
  language: string;
}
