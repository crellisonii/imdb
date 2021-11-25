import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { TrailerData, TrailerInput } from ".";
import { getTrailerUrl, green, log, magenta, red } from "../../helpers";
import { getImdbService } from "../../services";

@Resolver()
export class TrailerResolver {
  @Query(returns => TrailerData, {
    description: "Get the trailer for a given title",
  })
  async getTrailer(
    @Arg("trailerInput") input: TrailerInput
  ): Promise<TrailerData | string> {
    try {
      log(magenta("Trailer input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getTrailerUrl(id, language);
      const config: AxiosRequestConfig = { url };
      log(green("Trailer options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<TrailerData>(config);
      return resp.data;
    } catch (e) {
      log(red("Trailer Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
