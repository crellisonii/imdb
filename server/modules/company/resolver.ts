import { Arg, Query, Resolver } from "type-graphql";
import { CompanyData, CompanyInput } from ".";
import { buildUrl } from "../../helpers";
import { cyan, green, log, magenta, red } from "../../utils";
import { AxiosRequestConfig } from "axios";
import { getImdbService } from "../../services";

@Resolver()
export class CompanyResolver {
  @Query(returns => CompanyData)
  async getCompany(
    @Arg("companyInput") input: CompanyInput
  ): Promise<CompanyData | string> {
    try {
      log(magenta("Company input: "), input);
      const { id, language } = input;
      const url = buildUrl(language, "/Company", id);
      log(cyan("Company url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Company config: "), config);
      const resp = await getImdbService<CompanyData>(config);
      return resp.data;
    } catch (e) {
      log(red("Company error: "), e);
      throw new Error("Error");
    }
  }
}
