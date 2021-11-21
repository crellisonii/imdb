import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { TrailerData, TrailerInput } from ".";
import { getTrailerUrl, green, log, magenta, red } from "../../helpers";

@Resolver()
export class TrailerResolver {
  @Query(returns => TrailerData, {
    description: "Get the trailer for a given title",
  })
  async getTrailer(
    @Arg("trailerInput") input: TrailerInput
  ): Promise<TrailerData | string> {
    try {
      log(magenta("FullCast input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getTrailerUrl(id, language);
      const config: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("FullCast options: "), green(JSON.stringify(config)));
      const resp = await axios(config);
      return resp.data;
    } catch (e) {
      log(red("FullCast Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
