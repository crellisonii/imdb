import { Arg, Query, Resolver } from "type-graphql";
import { SearchInput } from ".";
import {
  getSearchAllUrl,
  getSearchCompanyUrl,
  getSearchEpisodesUrl,
  getSearchMoviesUrl,
  getSearchNamesUrl,
  getSearchSeriesUrl,
  green,
  log,
  magenta,
  red,
  yellow,
} from "../../helpers";
import axios, { AxiosRequestConfig } from "axios";
import { SearchData } from "./types";

@Resolver()
export class SearchResolver {
  @Query(returns => SearchData, {
    description:
      "Search all (Movie, Tv shows, Tv episodes, People, Company) by name/title",
  })
  async searchAll(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search input: "), magenta(JSON.stringify(input)));
      const { expression, language } = input;
      const url = getSearchAllUrl(expression, language);
      const config: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("Search options: "), green(JSON.stringify(config)));
      const resp = await axios(config);
      return resp.data;
    } catch (e) {
      log(red("Search Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search companies by name" })
  async searchCompany(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search input: "), magenta(JSON.stringify(input)));
      const { expression, language } = input;
      const url = getSearchCompanyUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("search options: "), green(JSON.stringify(options)));
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(red("Search Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search tv episodes by title" })
  async searchEpisodes(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search input: "), magenta(JSON.stringify(input)));
      const { expression, language } = input;
      const url = getSearchEpisodesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("search options: "), green(JSON.stringify(options)));
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(red("Search Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search movies by titles" })
  async searchMovies(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search input: "), magenta(JSON.stringify(input)));
      const { expression, language } = input;
      const url = getSearchMoviesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("search options: "), green(JSON.stringify(options)));
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(red("Search Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search people by name" })
  async searchNames(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search input: "), magenta(JSON.stringify(input)));
      const { expression, language } = input;
      const url = getSearchNamesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("search options: "), green(JSON.stringify(options)));
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(red("Search Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search tv shows by title" })
  async searchSeries(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search input: "), magenta(JSON.stringify(input)));
      const { expression, language } = input;
      const url = getSearchSeriesUrl(expression, language);
      const options: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("search options: "), green(JSON.stringify(options)));
      const resp = await axios(options);
      return resp.data;
    } catch (e) {
      log(red("Search Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
