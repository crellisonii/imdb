import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { PosterData, PosterInput } from ".";
import { getPosterUrl, green, log, magenta, red } from "../../helpers";
import { getImdbService } from "../../services";

@Resolver()
export class PosterResolver {
  @Query(returns => PosterData, {
    description: "Get the posters for the given id",
  })
  async getPosters(
    @Arg("posterInput") input: PosterInput
  ): Promise<PosterData | string> {
    try {
      log(magenta("Poster input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getPosterUrl(id, language);
      const config: AxiosRequestConfig = { url };
      log(green("Poster config: "), green(JSON.stringify(config)));
      const resp = await getImdbService<PosterData>(config);
      return resp.data;
    } catch (e) {
      log(red("Poster Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
