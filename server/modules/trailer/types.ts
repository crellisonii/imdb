import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TrailerData {
  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;
  @Field(type => String, { description: "The full title" })
  fullTitle: string;
  @Field(type => String, { description: "The title IMDB id" })
  imDbId: string;
  @Field(type => String, { description: "The imdb trailer link" })
  link: string;
  @Field(type => String, { description: "The imdb trailer embed link" })
  linkEmbed: string;
  @Field(type => String, { description: "The trailer thumbnail url" })
  thumbnailUrl: string;
  @Field(type => String, { description: "The title" })
  title: string;
  @Field(type => String, { description: "The title type" })
  type: string;
  @Field(type => String, { description: "The trailer upload date" })
  uploadDate: string;
  @Field(type => String, { description: "The trailer description" })
  videoDescription: string;
  @Field(type => String, { description: "The trailer id" })
  videoId: string;
  @Field(type => String, { description: "The trailer title" })
  videoTitle: string;
  @Field(type => String, { description: "The title year" })
  year: string;
}
