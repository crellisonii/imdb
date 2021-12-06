import { Field, ObjectType } from "type-graphql";

import { KeyValueItem } from "../key-value";
import { StarShort } from "../star";

@ObjectType()
class NewMovieDataDetail {
  @Field(type => String)
  contentRating: string;
  @Field(type => [StarShort])
  directorList: StarShort[];
  @Field(type => String)
  directors: string;
  @Field(type => String)
  fullTitle: string;
  @Field(type => [KeyValueItem])
  genreList: KeyValueItem[];
  @Field(type => String)
  genres: string;
  @Field(type => String)
  id: string;
  @Field(type => String)
  image: string;
  @Field(type => String)
  imDbRating: string;
  @Field(type => String)
  imDbRatingCount: string;
  @Field(type => String)
  metacriticRating: string;
  @Field(type => String)
  plot: string;
  @Field(type => String)
  releaseState: string;
  @Field(type => String)
  runtimeMins: string;
  @Field(type => String)
  runtimeStr: string;
  @Field(type => [StarShort])
  starList: StarShort[];
  @Field(type => String)
  stars: string;
  @Field(type => String)
  title: string;
  @Field(type => String)
  year: string;
}

@ObjectType()
export class NewMovieData {
  @Field(type => String)
  errorMessage: string;
  @Field(type => [NewMovieDataDetail])
  items: NewMovieDataDetail[];
}
