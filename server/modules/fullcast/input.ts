import { Field, InputType } from "type-graphql";

@InputType({ description: "Input type for FullCast" })
export class FullCastInput {
  @Field(type => String, { description: "The id of the title" })
  id: string;

  @Field(type => String, {
    nullable: true,
    defaultValue: "en",
    description: "The results language. Defaults to 'en'",
  })
  language: string;
}
