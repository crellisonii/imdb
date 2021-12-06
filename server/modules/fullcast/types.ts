import { Field, ObjectType } from "type-graphql";

import { ActorShort } from "../actor";
import { CastShort } from "../cast";

@ObjectType()
export class FullCastData {
  @Field(type => [ActorShort], {
    description: "The list of actors in ActorShort type",
  })
  actors: ActorShort[];

  @Field(type => CastShort, {
    description: "The director(s) in CastShort type",
  })
  directors: CastShort;

  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;

  @Field(type => String, { description: "The full title" })
  fullTitle: string;

  @Field(type => String, { description: "The IMDB id" })
  imDbId: string;

  @Field(type => [CastShort], { description: "Other cast and crew" })
  others: CastShort[];

  @Field(type => String, { description: "The title name" })
  title: string;

  @Field(type => String, { description: "The title type" })
  type: string;

  @Field(type => [CastShort], {
    description: "The writer(s) in CastShort type",
  })
  writers: CastShort[];

  @Field(type => String, { description: "The title year of release" })
  year: string;
}
