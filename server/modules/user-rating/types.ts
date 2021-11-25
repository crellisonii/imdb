import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserRatingDataDetail {
  @Field(type => String)
  percent: string;
  @Field(type => String)
  rating: string;
  @Field(type => String)
  votes: string;
}

@ObjectType()
export class UserRatingData {
  @Field(type => String)
  errorMessage: string;
  @Field(type => String)
  fullTitle: string;
  @Field(type => String)
  imDbId: string;
  @Field(type => [UserRatingDataDetail])
  ratings: UserRatingDataDetail[];
  @Field(type => String)
  title: string;
  @Field(type => String)
  totalRating: string;
  @Field(type => String)
  totalRatingVotes: string;
  @Field(type => String)
  type: string;
  @Field(type => String)
  year: string;
}
