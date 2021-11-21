import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { RatingData, RatingInput } from ".";
import { getRatingsUrl, green, log, magenta, red } from "../../helpers";

@Resolver()
export class RatingResolver {
  @Query(returns => RatingData, {
    description: "Get the rating for a given title",
  })
  async getRatings(
    @Arg("ratingInput") input: RatingInput
  ): Promise<RatingData | string> {
    try {
      log(magenta("Rating input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getRatingsUrl(id, language);
      const config: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("Rating options: "), green(JSON.stringify(config)));
      const resp = await axios(config);
      return resp.data;
    } catch (e) {
      log(red("Rating Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
