import { Field, ObjectType } from "type-graphql";

import { StarShort } from "../star";

@ObjectType()
export class TvSeriesInfo {
  @Field(type => [StarShort], {
    description: "Array of Tv Series creators in StarShort type",
  })
  creatorList: StarShort[];

  @Field(type => String, { description: "String of Tv Series creators" })
  creators: string;

  @Field(type => [String], { description: "Array of seasons" })
  seasons: string[];

  @Field(type => String, { description: "The year the Tv Series ended" })
  yearEnd: string;
}
