import { Arg, Query, Resolver } from "type-graphql";
import { SearchInput } from ".";
import { log } from "../../helpers";
import chalk from "chalk";
import {
  getSearchMoviesUrl,
  getSearchNamesUrl,
  getSearchSeriesUrl,
} from "../../helpers/url.helper";
import axios, { AxiosRequestConfig } from "axios";
import { SearchData } from "./types";

@Resolver()
export class SearchResolver {
  @Query(returns => SearchData, { description: "Search movies by titles" })
  async searchMovies(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(
        chalk.magentaBright("Search input: "),
        chalk.yellowBright(JSON.stringify(input))
      );
      const { expression, language } = input;
      const url = getSearchMoviesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(
        chalk.green("search options: "),
        chalk.white(JSON.stringify(options))
      );
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(chalk.redBright("Search Error: "), chalk.red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search tv shows by title" })
  async searchSeries(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(
        chalk.magentaBright("Search input: "),
        chalk.yellowBright(JSON.stringify(input))
      );
      const { expression, language } = input;
      const url = getSearchSeriesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(
        chalk.green("search options: "),
        chalk.white(JSON.stringify(options))
      );
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(chalk.redBright("Search Error: "), chalk.red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search people by name" })
  async searchNames(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(
        chalk.magentaBright("Search input: "),
        chalk.yellowBright(JSON.stringify(input))
      );
      const { expression, language } = input;
      const url = getSearchNamesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(
        chalk.green("search options: "),
        chalk.white(JSON.stringify(options))
      );
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(chalk.redBright("Search Error: "), chalk.red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
