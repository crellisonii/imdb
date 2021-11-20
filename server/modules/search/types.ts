import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SearchData {
  @Field(type => String)
  errorMessage: string;
  @Field(type => String)
  expression: string;
  @Field(type => [SearchResult])
  results: SearchResult[];
  @Field(type => String)
  searchType: string;
}

@ObjectType()
export class SearchResult {
  @Field(type => String)
  id: string;
  @Field(type => String)
  resultType: string;
  @Field(type => String)
  image: string;
  @Field(type => String)
  title: string;
  @Field(type => String)
  description: string;
}
