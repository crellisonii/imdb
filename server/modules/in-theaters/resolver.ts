import { Arg, Query, Resolver } from "type-graphql";
import { NewMovieData } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";

@Resolver()
export class InTheaterResolver {
  @Query(returns => NewMovieData)
  async getInTheaters(
    @Arg("newMovieInput", { nullable: true }) input: string = "en"
  ): Promise<NewMovieData | string> {
    try {
      log(magenta("In Theater input"), input);
      const url = buildUrl(input, "/InTheaters");
      log(cyan("In Theater url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("In Theater config: "), config);
      const resp = await getImdbService<NewMovieData>(config);
      return resp.data;
    } catch (e) {
      log(red("In Theater error:"), e);
      throw new Error("error");
    }
  }
}
