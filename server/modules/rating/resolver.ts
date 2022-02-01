import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { RatingData, RatingInput } from ".";
import { ratingPath } from "../../constants";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

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
      const url = buildUrl(language, ratingPath, id);
      log(cyan("Ratings url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Rating options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<RatingData>(config);
      return resp.data;
    } catch (e) {
      log(red("Rating Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
