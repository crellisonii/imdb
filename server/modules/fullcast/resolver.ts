import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { FullCastData, FullCastInput } from ".";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services/imdb.service";
import { cyan, green, log, magenta, red } from "../../utils";

@Resolver()
export class FullCastResolver {
  path = "/FullCast";

  @Query(returns => FullCastData, {
    description: "Get the full cast/crew for a given title",
  })
  async getFullCast(
    @Arg("fullCastInput") input: FullCastInput
  ): Promise<FullCastData | string> {
    try {
      log(magenta("FullCast input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = buildUrl(language, this.path, id);
      log(cyan("FullCast url: "), url);
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
