import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export class PosterData {
  @Field(type => [PosterDataItem], {
    description: "Array of backdrops in PosterDataItem type",
  })
  backdrops: PosterDataItem[];
  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;
  @Field(type => String, { description: "The full title" })
  fullTitle: string;
  @Field(type => String, { description: "The title IMDB id" })
  imDbId: string;
  @Field(type => [PosterDataItem], {
    description: "Array of posters in PosterDataItem type",
  })
  posters: PosterDataItem[];
  @Field(type => String, { description: "The  title" })
  title: string;
  @Field(type => String, { description: "The title type" })
  type: string;
  @Field(type => String, { description: "Year the poster was released" })
  year: string;
}

@ObjectType()
class PosterDataItem {
  @Field(type => Float, { description: "The poster image aspect ratio" })
  aspectRatio: number;
  @Field(type => String, { description: "The poster id" })
  id: string;
  @Field(type => Int, { description: "The poster height" })
  height: number;
  @Field(type => String, { description: "The poster language" })
  language: string;
  @Field(type => String, { description: "The link for the poster image" })
  link: string;
  @Field(type => Int, { description: "The poster width" })
  width: number;
}
