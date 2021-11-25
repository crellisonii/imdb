import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { UserRatingData, UserRatingInput } from ".";
import { getUserRatingUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { green, log, magenta, red } from "../../utils";

@Resolver()
export class UserRatingResolver {
  @Query(returns => UserRatingData, {
    description: "Get the full cast/crew for a given title",
  })
  async getFullCast(
    @Arg("userRatingInput") input: UserRatingInput
  ): Promise<UserRatingData | string> {
    try {
      log(magenta("FullCast input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getUserRatingUrl(id, language);
      const config: AxiosRequestConfig = { url };
      log(green("FullCast options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<UserRatingData>(config);
      return resp.data;
    } catch (e) {
      log(red("FullCast Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
