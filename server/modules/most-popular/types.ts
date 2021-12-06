import { Field, ObjectType } from "type-graphql";

@ObjectType()
class MostPopularDataDetail {
  @Field(type => String)
  crew: string;
  @Field(type => String)
  fullTitle: string;
  @Field(type => String)
  id: string;
  @Field(type => String)
  image: string;
  @Field(type => String)
  imDbRating: string;
  @Field(type => String)
  imDbRatingCount: string;
  @Field(type => String)
  rank: string;
  @Field(type => String)
  rangUpDown: string;
  @Field(type => String)
  title: string;
  @Field(type => String)
  year: string;
}

@ObjectType()
export class MostPopularData {
  @Field(type => String)
  errorMessage: string;
  @Field(type => [MostPopularDataDetail])
  items: MostPopularDataDetail[];
}
