import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CastMovie {
  @Field(type => String)
  id: string;

  @Field(type => String)
  originalTitle: string;

  @Field(type => String)
  role: string;

  @Field(type => String)
  title: string;

  @Field(type => String)
  year: string;
}

@ObjectType()
export class CastShort {
  @Field(type => [CastShortItem], { description: "Cast info" })
  items: CastShortItem[];

  @Field(type => String, { description: "The job of the cast member" })
  job: string;
}

@ObjectType()
export class CastShortItem {
  @Field(type => String, { description: "The cast credit description" })
  description: string;

  @Field(type => String, { description: "The id of the title" })
  id: string;

  @Field(type => String, { description: "The cast member name" })
  name: string;
}
