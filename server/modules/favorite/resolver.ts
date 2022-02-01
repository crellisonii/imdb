import { Arg, Query, Resolver } from "type-graphql";
import { FavoriteData, FavoriteInput, FavoriteType } from ".";
import { NameData, TitleData } from "..";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red, yellow } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";
import { namePath, titlePath } from "../../constants";

@Resolver()
export class FavoriteResolver {
  @Query(returns => FavoriteData)
  async getAllFavorites(
    @Arg("favoriteInput") input: FavoriteInput
  ): Promise<FavoriteData | string> {
    try {
      log(magenta("Favorite input: "), input);
      const { favorites, language, options } = input;
      const titleIds: string[] = [],
        nameIds: string[] = [],
        favoriteMovies: TitleData[] = [],
        favoriteTv: TitleData[] = [],
        favoriteNames: NameData[] = [];
      favorites.forEach(favorite => {
        favorite.type === FavoriteType.NAME
          ? nameIds.push(favorite.id)
          : titleIds.push(favorite.id);
      });
      if (nameIds.length > 0) {
        for (let i = 0; i < nameIds.length; i++) {
          const url = buildUrl(language, namePath, `/${nameIds[i]}`);
          log(cyan("Favorite Name url: "), cyan(url));
          const config: AxiosRequestConfig = { url };
          log(green("Favorite Name config: "), config);
          const resp = await getImdbService<NameData>(config);
          favoriteNames.push(resp.data);
        }
      }
      if (titleIds.length > 0) {
        for (let i = 0; i < titleIds.length; i++) {
          const url = buildUrl(
            language,
            titlePath,
            `/${titleIds[i]}/${options ? options : ""}`
          );
          log(cyan("Favorite Title url: "), cyan(url));
          const config: AxiosRequestConfig = { url };
          log(green("Favoirte Title config: "), config);
          const resp = await getImdbService<TitleData>(config);
          resp.data.type.toLowerCase() === FavoriteType.MOVIE
            ? favoriteMovies.push(resp.data)
            : favoriteTv.push(resp.data);
        }
      }
      log(yellow("favoriteMovies"), favoriteMovies);
      log(yellow("favoriteNames"), favoriteNames);
      log(yellow("favoriteTv"), favoriteTv);
      return { favoriteMovies, favoriteNames, favoriteTv };
    } catch (e) {
      log(red("Favorites Error: "), e);
      throw new Error("Error");
    }
  }
}
