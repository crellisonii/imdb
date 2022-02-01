import { Arg, Query, Resolver } from "type-graphql";
import { MostPopularData } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";
import { mostPopularMoviePath, mostPopularTVPath } from "../../constants";

@Resolver()
export class MostPopularResolver {
  @Query(returns => MostPopularData)
  async getMostPopularMovies(
    @Arg("language", { nullable: true }) input: string = "en"
  ): Promise<MostPopularData | string> {
    try {
      log(magenta("Most Popular Movies input: "), input);
      const url = buildUrl(input, mostPopularMoviePath);
      log(cyan("Most Popular Movies url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Most Popular Movies options: "), config);
      const resp = await getImdbService<MostPopularData>(config);
      return resp.data;
    } catch (e) {
      log(red("Most Popular Movies Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => MostPopularData)
  async getMostPopularTv(
    @Arg("language", { nullable: true }) input: string = "en"
  ): Promise<MostPopularData | string> {
    try {
      log(magenta("Most Popular TV input: "), input);
      const url = buildUrl(input, mostPopularTVPath);
      log(cyan("Most Popular TV url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Most Popular TV options: "), config);
      const resp = await getImdbService<MostPopularData>(config);
      return resp.data;
    } catch (e) {
      log(red("Most Popular TV error: "), e);
      throw new Error("Error");
    }
  }
}
