import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SimilarShort {
  @Field(type => String, { description: "Similar title id" })
  id: string;

  @Field(type => String, { description: "Similar title image url" })
  image: string;

  @Field(type => String, { description: "Similar title name" })
  title: string;
}
