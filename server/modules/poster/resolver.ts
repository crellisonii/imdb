import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { PosterData, PosterInput } from ".";
import { getPosterUrl, green, log, magenta, red } from "../../helpers";

@Resolver()
export class PosterResolver {
  @Query(returns => PosterData, {
    description: "Get the posters for the given id",
  })
  async getPosters(
    @Arg("posterInput") input: PosterInput
  ): Promise<PosterData | string> {
    try {
      log(magenta("Title input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getPosterUrl(id, language);
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
