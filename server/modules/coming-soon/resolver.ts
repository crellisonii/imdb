import { Arg, Query, Resolver } from "type-graphql";
import { NewMovieData } from "..";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";
import { comingSoonPath } from "../../constants";

@Resolver()
export class ComingSoonResolver {
  @Query(returns => NewMovieData)
  async getComingSoon(
    @Arg("comingSoonInput", { nullable: true }) input: string = "en"
  ): Promise<NewMovieData | string> {
    try {
      log(magenta("Coming Soon input: "), input);
      const url = buildUrl(input, comingSoonPath);
      log(cyan("Coming Soon url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Coming Soon config: "), config);
      const resp = await getImdbService<NewMovieData>(config);
      return resp.data;
    } catch (e) {
      log(red("Coming Soon error: "), e);
      throw new Error("Error");
    }
  }
}
