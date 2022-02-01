import { Field, InputType } from "type-graphql";

export enum FavoriteType {
  MOVIE = "movie",
  TV = "tv",
  NAME = "name",
}

@InputType()
export class FavoriteInputDetails {
  @Field(type => String)
  id: string;

  @Field(type => String)
  type: FavoriteType;
}

@InputType()
export class FavoriteInput {
  @Field(type => [FavoriteInputDetails])
  favorites: FavoriteInputDetails[];

  @Field(type => String, { nullable: true, defaultValue: "en" })
  language: string;

  @Field(type => String, { nullable: true })
  options: string;
}
