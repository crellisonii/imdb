import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class KeyValueItem {
  @Field(type => String, { description: "the item key" })
  key: string;
  @Field(type => String, { description: "The item value" })
  value: string;
}
