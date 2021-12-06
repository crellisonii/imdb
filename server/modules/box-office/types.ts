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
