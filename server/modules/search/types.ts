import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SearchData {
  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;

  @Field(type => String, { description: "The search expression" })
  expression: string;

  @Field(type => [SearchResult], { description: "Array of SearchResult type" })
  results: SearchResult[];

  @Field(type => String, { description: "The search type" })
  searchType: string;
}

@ObjectType()
export class SearchResult {
  @Field(type => String, { description: "The id of the searched item" })
  id: string;

  @Field(type => String, { description: "The result type" })
  resultType: string;

  @Field(type => String, { description: "The image url" })
  image: string;

  @Field(type => String, { description: "The title of the searched item" })
  title: string;

  @Field(type => String, {
    description: "The description of the searched item",
  })
  description: string;
}
