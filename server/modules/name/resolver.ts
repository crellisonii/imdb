import { Arg, Query, Resolver } from "type-graphql";
import { NameData, NameInput, NamesData, NamesInput } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";
import e from "express";

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

  @Query(returns => NamesData)
  async getNames(
    @Arg("namesInput") input: NamesInput
  ): Promise<NamesData | string> {
    try {
      log(magenta("Names input: "), input);
      const { ids, language } = input;
      const namesData: NameData[] = [];
      for (let i = 0; i < ids.length; i++) {
        const url = buildUrl(language, "/Name", ids[i]);
        log(cyan("Names url: "), url);
        const config: AxiosRequestConfig = { url };
        log(green("Names config: "), config);
        const resp = await getImdbService<NameData>(config);
        namesData.push(resp.data);
      }
      return { namesData };
    } catch (e) {
      log(red("Names error: "), e);
      throw new Error("Error");
    }
  }
}
