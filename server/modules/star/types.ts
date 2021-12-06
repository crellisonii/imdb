import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class StarShort {
  @Field(type => String, { description: "The id of a star in the title" })
  id: string;
  @Field(type => String, { description: "The name of a star in the title" })
  name: string;
}
