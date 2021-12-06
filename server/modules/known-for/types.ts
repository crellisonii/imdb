import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class KnownFor {
  @Field(type => String)
  fullTitle: string;

  @Field(type => String)
  id: string;

  @Field(type => String)
  image: string;

  @Field(type => String)
  role: string;

  @Field(type => String)
  title: string;

  @Field(type => String)
  year: string;
}
