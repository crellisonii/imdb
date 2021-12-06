import { Field, InputType } from "type-graphql";

@InputType({ description: "Input type for Search" })
export class SearchInput {
  @Field(type => String, { description: "The expression to search for" })
  expression: string;

  @Field(type => String, {
    nullable: true,
    defaultValue: "en",
    description: "The results language. Defaults to 'en'",
  })
  language: string;
}
