import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CompanyShort {
  @Field(type => String, { description: "The id of the company" })
  id: string;

  @Field(type => String, { description: "The name of the company" })
  name: string;
}
