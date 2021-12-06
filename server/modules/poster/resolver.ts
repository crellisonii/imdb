import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { PosterData, PosterInput } from ".";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

@Resolver()
export class PosterResolver {
  path = "/Posters";

  @Query(returns => PosterData, {
    description: "Get the posters for the given id",
  })
  async getPosters(
    @Arg("posterInput") input: PosterInput
  ): Promise<PosterData | string> {
    try {
      log(magenta("Poster input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = buildUrl(language, this.path, id);
      log(cyan("Posters url: "), url);
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
