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
