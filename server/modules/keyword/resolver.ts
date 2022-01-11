import { Arg, Query, Resolver } from "type-graphql";
import { KeywordData, KeywordInput } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services/imdb.service";
import { keywordPath } from "../../constants";

@Resolver()
export class KeywordResolver {
  @Query(returns => KeywordData)
  async getKeyword(
    @Arg("keywordInput") input: KeywordInput
  ): Promise<KeywordData | string> {
    try {
      log(magenta("Keyword input: "), input);
      const { id, language } = input;
      const url = buildUrl(language, keywordPath, id);
      log(cyan("Keyword url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Keyword config"), config);
      const resp = await getImdbService<KeywordData>(config);
      return resp.data;
    } catch (e) {
      log(red("Keyword error: "), e);
      throw new Error("Error");
    }
  }
}
