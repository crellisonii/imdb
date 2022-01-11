import { Arg, Query, Resolver } from "type-graphql";
import { MetacriticReviewData, ReviewData, ReviewInput } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";
import { metacriticReviewPath, reviewPath } from "../../constants";

@Resolver()
export class ReviewResolver {
  @Query(returns => ReviewData)
  async getReviews(
    @Arg("reviewInput") input: ReviewInput
  ): Promise<ReviewData | string> {
    try {
      log(magenta("Review input: "), input);
      const { id, language } = input;
      const url = buildUrl(language, reviewPath, id);
      log(cyan("Review url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Review config"), config);
      const resp = await getImdbService<ReviewData>(config);
      return resp.data;
    } catch (e) {
      log(red("Review error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => MetacriticReviewData)
  async getMetacriticReviews(
    @Arg("metacriticInput") input: ReviewInput
  ): Promise<MetacriticReviewData | string> {
    try {
      log(magenta("Metacritic Review input: "), input);
      const { id, language } = input;
      const url = buildUrl(language, metacriticReviewPath, id);
      log(cyan("Metacritic Review url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Metacritic Review config"), config);
      const resp = await getImdbService<MetacriticReviewData>(config);
      return resp.data;
    } catch (e) {
      log(red("Metacritic Review error: "), e);
      throw new Error("Error");
    }
  }
}
