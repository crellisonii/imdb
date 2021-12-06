import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { SeasonEpisodeData, SeasonEpisodeInput } from ".";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

@Resolver()
export class SeasonEpisodeResolver {
  @Query(returns => SeasonEpisodeData, {
    description: "Get the season episode info for a given title",
  })
  async getSeasonEpisode(
    @Arg("seasonEpisodeInput") input: SeasonEpisodeInput
  ): Promise<SeasonEpisodeData | string> {
    try {
      log(magenta("SeasonEpisode input: "), magenta(JSON.stringify(input)));
      const { id, language, seasonNumber } = input;
      const url = buildUrl(
        language,
        "/SeasonEpisodes",
        `/${id}/${seasonNumber}`
      );
      log(cyan("Season Episodes url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("SeasonEpisode options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<SeasonEpisodeData>(config);
      return resp.data;
    } catch (e) {
      log(red("SeasonEpisode Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
