import { Arg, Query, Resolver } from "type-graphql";
import { NameData, NameInput } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";

@Resolver()
export class NameResolver {
  @Query(returns => NameData)
  async getName(
    @Arg("nameInput") input: NameInput
  ): Promise<NameData | string> {
    try {
      log(magenta("Name input: "), input);
      const { id, language } = input;
      const url = buildUrl(language, "/Name", id);
      log(cyan("Name url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Name config: "), config);
      const resp = await getImdbService<NameData>(config);
      return resp.data;
    } catch (e) {
      log(red("Name error: "), e);
      throw new Error("Error");
    }
  }
}
