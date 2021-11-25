import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class EpisodeShortDetail {
  @Field(type => String)
  episodeNumber: string;
  @Field(type => String)
  id: string;
  @Field(type => String)
  image: string;
  @Field(type => String)
  plot: string;
  @Field(type => String)
  ratingCount: string;
  @Field(type => String)
  ratingValue: string;
  @Field(type => String)
  released: string;
  @Field(type => String)
  seasonNumber: string;
  @Field(type => String)
  title: string;
  @Field(type => String)
  year: string;
}

@ObjectType()
export class SeasonEpisodeData {
  @Field(type => [EpisodeShortDetail])
  episodes: EpisodeShortDetail[];
  @Field(type => String)
  errorMessage: string;
  @Field(type => String)
  fullTitle: string;
  @Field(type => String)
  imDbId: string;
  @Field(type => String)
  title: string;
  @Field(type => String)
  type: string;
  @Field(type => String)
  year: string;
}
