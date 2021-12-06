import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TvEpisodeInfo {
  @Field(type => String, { description: "The episode number" })
  episodeNumber: string;
  @Field(type => String, { description: "The id of the next episode" })
  nextEpisodeId: string;
  @Field(type => String, { description: "The id of the previous episode" })
  previousEpisodeId: string;
  @Field(type => String, { description: "The season number" })
  seasonNumber: string;
  @Field(type => String, { description: "The series full title" })
  seriesFullTitle: string;
  @Field(type => String, { description: "The id of the series" })
  seriesId: string;
  @Field(type => String, { description: "The title of the series" })
  seriesTitle: string;
  @Field(type => String, { description: "The year the episode was made" })
  year: string;
  @Field(type => String, { description: "The year end" })
  yearEnd: string;
}
