import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { TitleData, TitleInput } from ".";
import { getTitleUrl, green, log, magenta, red } from "../../helpers";

@Resolver()
export class TitleResolver {
  @Query(returns => TitleData, {
    description: "Get the title details given the id",
  })
  async getTitle(
    @Arg("titleInput") input: TitleInput
  ): Promise<TitleData | string> {
    try {
      log(magenta("Title input: "), magenta(JSON.stringify(input)));
      const { id, language, options } = input;
      const url = getTitleUrl(id, language, options);
      const config: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("Title config: "), green(JSON.stringify(config)));
      const resp = await axios(config);
      return resp.data;
    } catch (e) {
      log(red("Title Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
