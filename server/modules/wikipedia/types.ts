import { Field, ObjectType } from "type-graphql";

@ObjectType()
class WikipediaDataPlot {
  @Field(type => String, { description: "Wikipedia html text" })
  html: string;
  @Field(type => String, { description: "Wikipedia plain text" })
  plainText: string;
}

@ObjectType()
export class WikipediaData {
  @Field(type => String, { description: "Fetch error message" })
  errorMessage: string;

  @Field(type => String, { description: "The full title" })
  fullTitle: string;

  @Field(type => String, { description: "The IMDB id" })
  imDbId: string;

  @Field(type => String, { description: "The available languages" })
  language: string;

  @Field(type => WikipediaDataPlot, { description: "Full Wikipedia info" })
  plotFull: WikipediaDataPlot;

  @Field(type => WikipediaDataPlot, { description: "Short Wikipedia info" })
  plotShort: WikipediaDataPlot;

  @Field(type => String, { description: "The title" })
  title: string;

  @Field(type => String, { description: "The title in the language" })
  titleInLanguage: string;

  @Field(type => String, { description: "The title type" })
  type: string;

  @Field(type => String, { description: "The url to the Wikipedia page" })
  url: string;

  @Field(type => String, { description: "The title year" })
  year: string;
}
