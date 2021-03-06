import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { UserRatingData, UserRatingInput } from ".";
import { userRatingPath } from "../../constants";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

@Resolver()
export class UserRatingResolver {
  @Query(returns => UserRatingData, {
    description: "Get the user rating for a given title",
  })
  async getUserRating(
    @Arg("userRatingInput") input: UserRatingInput
  ): Promise<UserRatingData | string> {
    try {
      log(magenta("UserRating input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = buildUrl(language, userRatingPath, id);
      log(cyan("User Rating url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("UserRating options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<UserRatingData>(config);
      return resp.data;
    } catch (e) {
      log(red("UserRating Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
