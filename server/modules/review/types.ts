import { Field, ObjectType } from "type-graphql";

@ObjectType()
class ReviewDetail {
  @Field(type => String)
  content: string;

  @Field(type => String)
  date: string;

  @Field(type => String)
  helpful: string;

  @Field(type => String)
  rate: string;

  @Field(type => String)
  reviewLink: string;

  @Field(type => String)
  title: string;

  @Field(type => String)
  username: string;

  @Field(type => String)
  userUrl: string;

  @Field(type => Boolean)
  warningSpoilers: boolean;
}

@ObjectType()
export class ReviewData {
  @Field(type => String)
  errorMessage: string;

  @Field(type => String)
  fullTitle: string;

  @Field(type => String)
  imDbId: string;

  @Field(type => [ReviewDetail])
  items: ReviewDetail[];

  @Field(type => String)
  title: string;

  @Field(type => String)
  type: string;

  @Field(type => String)
  year: string;
}
