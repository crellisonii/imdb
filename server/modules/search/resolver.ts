import { Arg, Query, Resolver } from "type-graphql";
import { SearchInput } from ".";
import { buildUrl } from "../../helpers";
import axios, { AxiosRequestConfig } from "axios";
import { SearchData } from "./types";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

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
      const url = buildUrl(language, "/SearchAll", expression);
      log(cyan("Search All url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<SearchData>(config);
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
      const url = buildUrl(language, "/SearchCompany", expression);
      log(cyan("Search Company url: "), url);
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
      const url = buildUrl(language, "/SearchEpisode", expression);
      log(cyan("Search Espisodes url: "), url);
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
      const url = buildUrl(language, "/SearchMovie", expression);
      log(cyan("Search Movies url: "), url);
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
      const url = buildUrl(language, "/SearchName", expression);
      log(cyan("Search Names url: "), url);
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
      const url = buildUrl(language, "/SearchSeries", expression);
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
