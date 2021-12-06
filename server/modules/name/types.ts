import { Field, ObjectType } from "type-graphql";

import { CastMovie } from "../cast";
import { KnownFor } from "../known-for";

@ObjectType()
export class NameData {
  @Field(type => String)
  awards: string;

  @Field(type => String)
  birthDate: string;

  @Field(type => [CastMovie])
  castMovies: CastMovie[];

  @Field(type => String)
  deathDate: string;

  @Field(type => String)
  errorMessage: string;

  @Field(type => String)
  height: string;

  @Field(type => String)
  id: string;

  @Field(type => String)
  image: string;

  @Field(type => [KnownFor])
  knownFor: KnownFor[];

  @Field(type => String)
  name: string;

  @Field(type => String)
  role: string;

  @Field(type => String)
  summary: string;
}
