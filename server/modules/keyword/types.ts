import { Field, ObjectType } from "type-graphql";

import { MovieShort } from "../movie";

@ObjectType()
export class KeywordData {
  @Field(type => String)
  errorMessage: string;

  @Field(type => [MovieShort])
  items: MovieShort[];

  @Field(type => String)
  keyword: string;
}
