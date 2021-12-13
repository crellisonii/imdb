import { Field, InputType } from "type-graphql";

@InputType()
export class NameInput {
  @Field(type => String)
  id: string;

  @Field(type => String, { nullable: true, defaultValue: "en" })
  language: string;
}

@InputType()
export class NamesInput {
  @Field(type => [String])
  ids: string[];

  @Field(type => String, { nullable: true, defaultValue: "en" })
  language: string;
}
