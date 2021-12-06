import { Field, ObjectType } from "type-graphql";

import { ActorShort } from "../actor";
import { BoxOfficeShort } from "../box-office";
import { CompanyShort } from "../company";
import { FullCastData } from "../fullcast";
import { ImageData } from "../image";
import { KeyValueItem } from "../key-value";
import { PosterData } from "../poster";
import { RatingData } from "../rating";
import { SimilarShort } from "../similar";
import { StarShort } from "../star";
import { TrailerData } from "../trailer";
import { TvEpisodeInfo } from "../tv-episode-info";
import { TvSeriesInfo } from "../tv-series-info";
import { WikipediaData } from "../wikipedia";

@ObjectType()
export class TitleData {
  @Field(type => [ActorShort], { description: "List of actors" })
  actorList: ActorShort[];

  @Field(type => String, { description: "Awards won by the title" })
  awards: string;

  @Field(type => BoxOfficeShort, { description: "The title box office info" })
  boxOffice: BoxOfficeShort;

  @Field(type => String, { description: "String of companies" })
  companies: string;

  @Field(type => [CompanyShort], {
    description: "Array of production companies",
  })
  companyList: CompanyShort[];

  @Field(type => String, { description: "The content rating for the title" })
  contentRating: string;

  @Field(type => String, {
    description: "Filming location countries in string format",
  })
  countries: string;

  @Field(type => [KeyValueItem], {
    description: "Array of filming location countries in KeyValueItem type",
  })
  countryList: KeyValueItem[];

  @Field(type => String, {
    description: "A list of directors in string format",
  })
  directors: string;

  @Field(type => [StarShort], {
    description: "List of directors in StarShort type",
  })
  directorList: StarShort[];

  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;

  @Field(type => FullCastData, {
    nullable: true,
    description: "The full cast/crew data",
  })
  fullCast: FullCastData;

  @Field(type => String, { description: "The full title" })
  fullTitle: string;

  @Field(type => [KeyValueItem], {
    description: "Array of genres in KeyValueItem type",
  })
  genreList: KeyValueItem[];

  @Field(type => String, {
    description: "The string of genres related to the title",
  })
  genres: string;

  @Field(type => String, { description: "The id of the title" })
  id: string;

  @Field(type => String, { description: "The title image" })
  image: string;

  @Field(type => ImageData, {
    nullable: true,
    description: "All images for the title",
  })
  images: ImageData;

  @Field(type => String, { description: "The IMDB rating for the title" })
  imDbRating: string;

  @Field(type => String, {
    description: "The number of IMDB rating votes for the title",
  })
  imDbRatingVotes: string;

  @Field(type => [String], { description: "Array of keywords" })
  keyworkList: string[];

  @Field(type => String, { description: "Keywords in string format" })
  keywords: string;

  @Field(type => [KeyValueItem], {
    description: "Available languages in KeyValueItem type",
  })
  languageList: KeyValueItem[];

  @Field(type => String, {
    description: "Available languages in string format",
  })
  languages: string;

  @Field(type => String, { description: "The MetaCritic rating for the title" })
  metacriticRating: string;

  @Field(type => String, { description: "The original title" })
  originalTitle: string;

  @Field(type => String, {
    description: "The plot of the title. Is always in 'en'",
  })
  plot: string;

  @Field(type => Boolean, {
    description: "The plot of the title is written right to left",
  })
  plotIsRtl: boolean;

  @Field(type => String, { description: "The id of the title" })
  plotLocal: string;

  @Field(type => PosterData, {
    nullable: true,
    description: "The id of the title",
  })
  posters: PosterData;

  @Field(type => RatingData, {
    nullable: true,
    description: "The title rating data",
  })
  ratings: RatingData;

  @Field(type => String, { description: "The full release date" })
  releaseDate: string;

  @Field(type => String, { description: "The title runtime in minutes" })
  runtimeMins: string;

  @Field(type => String, {
    description: "The title runtime in hour minutes format",
  })
  runtimeStr: string;

  @Field(type => [SimilarShort], { description: "Array of similar titles" })
  similars: SimilarShort[];

  @Field(type => String, {
    description: "The stars of the title in string format",
  })
  stars: string;

  @Field(type => [StarShort], {
    description: "The stars of the title using StarShort type",
  })
  starList: StarShort[];

  @Field(type => String, { description: "The tag line of the title" })
  tagline: string;

  @Field(type => String, { description: "The title" })
  title: string;

  @Field(type => TrailerData, {
    nullable: true,
    description: "The trailer info",
  })
  trailer: TrailerData;

  @Field(type => TvEpisodeInfo, {
    nullable: true,
    description: "Tv episode info",
  })
  tvEpisodeInfo: TvEpisodeInfo;

  @Field(type => TvSeriesInfo, {
    nullable: true,
    description: "The id of the title",
  })
  tvSeriesInfo: TvSeriesInfo;

  @Field(type => String, { description: "The type of title" })
  type: string;

  @Field(type => WikipediaData, {
    nullable: true,
    description: "Wikipedia html text",
  })
  wikipedia: WikipediaData;

  @Field(type => String, {
    description: "The writers of the title in string format",
  })
  writers: string;

  @Field(type => [StarShort], {
    description: "The writers of the title using StarShort type",
  })
  writerList: StarShort[];

  @Field(type => String, { description: "The year of the title's release" })
  year: string;
}
