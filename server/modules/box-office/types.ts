import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BoxOfficeShort {
  @Field(type => String, { description: "The budget of the title" })
  budget: string;
  @Field(type => String, { description: "World wide gross" })
  cumulativeWorldWideGross: string;
  @Field(type => String, { description: "Gross USA" })
  grossUSA: string;
  @Field(type => String, { description: "Opening weekend USA" })
  openingWeekendUSA: string;
}

@ObjectType()
export class BoxOfficeWeekendDataDetail {
  @Field(type => String)
  gross: string;
  @Field(type => String)
  id: string;
  @Field(type => String)
  image: string;
  @Field(type => String)
  rank: string;
  @Field(type => String)
  title: string;
  @Field(type => String)
  weekend: string;
  @Field(type => String)
  weeks: string;
}

@ObjectType()
export class BoxOfficeWeekendData {
  @Field(type => String)
  errorMessage: string;
  @Field(type => [BoxOfficeWeekendDataDetail])
  items: BoxOfficeWeekendDataDetail[];
}
