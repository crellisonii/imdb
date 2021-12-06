import { Field, InputType } from "type-graphql";

@InputType({ description: "Input type for Trailer" })
export class TrailerInput {
  @Field(type => String, { description: "This id of the title" })
  id: string;

  @Field(type => String, {
    nullable: true,
    defaultValue: "en",
    description: "The results language. Defaults to 'en'",
  })
  language: string;
}
