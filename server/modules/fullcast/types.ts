import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ActorShort {
  @Field(type => String, { description: "Character info" })
  asCharacter: string;
  @Field(type => String, { description: "The id of the actor" })
  id: string;
  @Field(type => String, { description: "The actor's image" })
  image: string;
  @Field(type => String, { description: "The name of the actor" })
  name: string;
}

@ObjectType()
class CastShort {
  @Field(type => [CastShortItem], { description: "Cast info" })
  items: CastShortItem[];
  @Field(type => String, { description: "The job of the cast member" })
  job: string;
}

@ObjectType()
class CastShortItem {
  @Field(type => String, { description: "The cast credit description" })
  description: string;
  @Field(type => String, { description: "The id of the title" })
  id: string;
  @Field(type => String, { description: "The cast member name" })
  name: string;
}

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
