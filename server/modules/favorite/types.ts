import { Field, ObjectType } from "type-graphql";
import { NameData, TitleData } from "..";

@ObjectType()
export class FavoriteData {
  @Field(type => [TitleData])
  favoriteMovies: TitleData[];

  @Field(type => [TitleData])
  favoriteTv: TitleData[];

  @Field(type => [NameData])
  favoriteNames: NameData[];
}
