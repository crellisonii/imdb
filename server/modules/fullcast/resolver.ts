import axios, { AxiosRequestConfig } from "axios";
import { magenta, green, red } from "chalk";
import { log } from "console";
import { Arg, Query, Resolver } from "type-graphql";
import { FullCastData, FullCastInput } from ".";
import { getFullCastUrl } from "../../helpers";

@Resolver()
export class FullCastResolver {
  @Query(returns => FullCastData, {
    description: "Get the full cast/crew for a given title",
  })
  async getFullCast(
    @Arg("fullCastInput") input: FullCastInput
  ): Promise<FullCastData | string> {
    try {
      log(magenta("FullCast input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getFullCastUrl(id, language);
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
