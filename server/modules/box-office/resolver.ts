import { Arg, Query, Resolver } from "type-graphql";
import { BoxOfficeAllTimeData, BoxOfficeWeekendData } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";
import { boxOfficeAlltimePath, boxOfficePath } from "../../constants";

@Resolver()
export class BoxOfficeResolver {
  @Query(returns => BoxOfficeWeekendData)
  async getBoxOfficeWeekend(
    @Arg("boxOfficeInput", { nullable: true }) input: string = "en"
  ): Promise<BoxOfficeWeekendData | string> {
    try {
      log(magenta("Box Office Weekend input: "), input);
      const url = buildUrl(input, boxOfficePath);
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

  @Query(returns => BoxOfficeAllTimeData)
  async getBoxOfficeAllTime(
    @Arg("boxOfficeInput", { nullable: true }) input: string = "en"
  ): Promise<BoxOfficeAllTimeData | string> {
    try {
      log(magenta("Box Office All Time input: "), input);
      const url = buildUrl(input, boxOfficeAlltimePath);
      log(cyan("Box Office All Time url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Box Office All Time config: "), config);
      const resp = await getImdbService<BoxOfficeAllTimeData>(config);
      return resp.data;
    } catch (e) {
      log(red("Box Office All Time error: "), e);
      throw new Error("Error");
    }
  }
}
