import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MovieShort {
  @Field(type => String)
  id: string;

  @Field(type => String)
  image: string;

  @Field(type => String)
  imDbRating: string;

  @Field(type => String)
  title: string;

  @Field(type => String)
  year: string;
}
