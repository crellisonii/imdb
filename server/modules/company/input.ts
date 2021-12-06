import { Field, InputType } from "type-graphql";

@InputType()
export class CompanyInput {
  @Field(type => String)
  id: string;

  @Field(type => String, { nullable: true, defaultValue: "en" })
  language: string;
}
