import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class RatingData {
  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;

  @Field(type => String, { description: "The full title" })
  fullTitle: string;

  @Field(type => String, { description: "The title affinity rating" })
  filmAffinity: string;

  @Field(type => String, { description: "The IMDB rating" })
  imDb: string;

  @Field(type => String, { description: "The IMDB id" })
  imDbId: string;

  @Field(type => String, { description: "The metacritic rating" })
  metacritic: string;
  @Field(type => String, { description: "Rotten tomatoes rating" })
  rottenTomatoes: string;

  @Field(type => String, { description: "The title" })
  title: string;

  @Field(type => String, { description: "The Movie DB rating" })
  theMovieDb: string;

  @Field(type => String, { description: "The TV_Com rating" })
  tV_com: string;

  @Field(type => String, { description: "The title type" })
  type: string;

  @Field(type => String, { description: "The title year" })
  year: string;
}
