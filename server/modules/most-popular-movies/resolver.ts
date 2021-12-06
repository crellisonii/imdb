import { Arg, Query, Resolver } from "type-graphql";
import { MostPopularMovieData } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";

@Resolver()
export class MostPopularMovieResolver {
  @Query(returns => MostPopularMovieData)
  async getMostPopularMovies(
    @Arg("language", { nullable: true }) input: string = "en"
  ): Promise<MostPopularMovieData | string> {
    try {
      log(magenta("Most Popular Movies input: "), input);
      const url = buildUrl(input, "/MostPopularMovies");
      log(cyan("Most Popular Movies url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Most Popular Movies options: "), config);
      const resp = await getImdbService<MostPopularMovieData>(config);
      return resp.data;
    } catch (e) {
      log(red("Most Popular Movies Error: "), e);
      throw new Error("Error");
    }
  }
}
