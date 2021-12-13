import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { TitlesData, TitlesInput, TitleData, TitleInput } from ".";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

@Resolver()
export class TitleResolver {
  @Query(returns => TitleData, {
    description: "Get the title details given the id",
  })
  async getTitle(
    @Arg("titleInput") input: TitleInput
  ): Promise<TitleData | string> {
    try {
      log(magenta("Title input: "), input);
      const { id, language, options } = input;
      const url = buildUrl(language, "/Title", `/${id}/${options}`);
      log(cyan("Title url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Title config: "), config);
      const resp = await getImdbService<TitleData>(config);
      return resp.data;
    } catch (e) {
      log(red("Title Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => TitlesData)
  async getTitles(
    @Arg("titlesInput") input: TitlesInput
  ): Promise<TitlesData | string> {
    try {
      const titlesData: TitleData[] = [];
      log(magenta("Titles input: "), input);
      const { ids, language, options } = input;
      for (let i = 0; i < ids.length; i++) {
        const url = buildUrl(language, "/Title", `/${ids[i]}/${options}`);
        log(cyan("Titles url: "), url);
        const config: AxiosRequestConfig = { url };
        log(green("Titles config: "), config);
        const resp = await getImdbService<TitleData>(config);
        titlesData.push(resp.data);
      }
      return { titlesData };
    } catch (e) {
      log(red("Titles Error: "), e);
      throw new Error("Error");
    }
  }
}
