import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { WikipediaData, WikipediaInput } from ".";
import { getWikipediaUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { green, log, magenta, red } from "../../utils";

@Resolver()
export class WikipediaResolver {
  @Query(returns => WikipediaData, {
    description: "Get the wikipedia info for a given title",
  })
  async getFullCast(
    @Arg("wikipediaInput") input: WikipediaInput
  ): Promise<WikipediaData | string> {
    try {
      log(magenta("Wikipedia input: "), magenta(JSON.stringify(input)));
      const { id, language } = input;
      const url = getWikipediaUrl(id, language);
      const config: AxiosRequestConfig = { url };
      log(green("Wikipedia options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<WikipediaData>(config);
      return resp.data;
    } catch (e) {
      log(red("Wikipedia Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
