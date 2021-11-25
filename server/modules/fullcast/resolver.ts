import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { FullCastData, FullCastInput } from ".";
import { getFullCastUrl } from "../../helpers";
import { getImdbService } from "../../services/imdb.service";
import { green, log, magenta, red } from "../../utils";

@Resolver()
export class FullCastResolver {
  @Query(returns => FullCastData, {
    description: "Get the full cast/crew for a given title",
  })
  async getFullCast(
    @Arg("fullCastInput") input: FullCastInput
  ): Promise<FullCastData | string> {
    try {
      log(magenta("FullCast input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getFullCastUrl(id, language);
      const config: AxiosRequestConfig = { url };
      log(green("FullCast options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<FullCastData>(config);
      return resp.data;
    } catch (e) {
      log(red("FullCast Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
