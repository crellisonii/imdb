import { Field, ObjectType } from "type-graphql";

import { MovieShort } from "../movie";

@ObjectType()
export class CompanyData {
  @Field(type => String)
  errorMessage: string;

  @Field(type => String)
  id: string;

  @Field(type => [MovieShort])
  item: MovieShort[];

  @Field(type => String)
  name: string;
}

@ObjectType()
export class CompanyShort {
  @Field(type => String, { description: "The id of the company" })
  id: string;

  @Field(type => String, { description: "The name of the company" })
  name: string;
}
