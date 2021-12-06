import { Field, InputType } from "type-graphql";

@InputType({ description: "Input type for images" })
export class ImageInput {
  @Field(type => String, { description: "Id of the title" })
  id: string;

  @Field(type => String, {
    nullable: true,
    defaultValue: "en",
    description: "The result language. Defaults to 'en'",
  })
  language: string;

  @Field(type => String, {
    nullable: true,
    defaultValue: "Short",
    description:
      "String to show up to 48 images ('Short' default) or all images ('Full')",
  })
  options: string;
}
