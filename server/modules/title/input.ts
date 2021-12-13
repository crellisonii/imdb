import { Field, InputType } from "type-graphql";

@InputType({ description: "Input type for title queries" })
export class TitleInput {
  @Field(type => String, { description: "The id of the title" })
  id: string;

  @Field(type => String, {
    nullable: true,
    defaultValue: "en",
    description: "The results language. Defaults to 'en'",
  })
  language: string;

  @Field(type => String, {
    nullable: true,
    description:
      "A comma separated string to get more info about: FullActor, FullCast, Posters, Images, Trailer, Ratings, Wikipedia",
  })
  options: string;
}

@InputType({ description: "Input type for multiple title queries" })
export class TitlesInput {
  @Field(type => [String])
  ids: string[];

  @Field(type => String, { nullable: true, defaultValue: "en" })
  language: string;

  @Field(type => String, { nullable: true })
  options: string;
}
