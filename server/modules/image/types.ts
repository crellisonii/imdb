import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ImageData {
  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;

  @Field(type => String, { description: "The full title" })
  fullTitle: string;

  @Field(type => String, { description: "The title IMDB id" })
  imDbId: string;

  @Field(type => [ImageDataDetail], {
    description: "Array of ImageDataDetail types",
  })
  items: ImageDataDetail[];

  @Field(type => String, { description: "The title" })
  title: string;

  @Field(type => String, { description: "The title type" })
  type: string;

  @Field(type => String, { description: "The title year" })
  year: string;
}

@ObjectType()
class ImageDataDetail {
  @Field(type => String, { description: "Image url" })
  image: string;

  @Field(type => String, { description: "Image title" })
  title: string;
}
