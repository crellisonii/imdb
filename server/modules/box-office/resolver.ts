import { Arg, Query, Resolver } from "type-graphql";
import { BoxOfficeWeekendData } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";

@Resolver()
export class BoxOfficeResolver {
  @Query(returns => BoxOfficeWeekendData)
  async getBoxOfficeWeekend(
    @Arg("boxOfficeInput", { nullable: true }) input: string = "en"
  ): Promise<BoxOfficeWeekendData | string> {
    try {
      log(magenta("Box Office Weekend input: "), input);
      const url = buildUrl(input, "/BoxOffice");
      log(cyan("Box Office Weekend url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Box Office Weekend config: "), config);
      const resp = await getImdbService<BoxOfficeWeekendData>(config);
      return resp.data;
    } catch (e) {
      log(red("Box Office Weekend error: "), e);
      throw new Error("Error");
    }
  }
}
