import { Arg, Query, Resolver } from "type-graphql";
import { SearchInput } from ".";
import { buildUrl } from "../../helpers";
import { AxiosRequestConfig } from "axios";
import { SearchData } from "./types";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";
import {
  searchAllPath,
  searchCompanyPath,
  searchEpisodePath,
  searchKeywordPath,
  searchMoviePath,
  searchNamePath,
  searchSeriesPath,
} from "../../constants";

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
      log(magenta("Search All input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchAllPath, expression);
      log(cyan("Search All url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search All config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search All Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search companies by name" })
  async searchCompany(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search Company input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchCompanyPath, expression);
      log(cyan("Search Company url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search Company config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search Company Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search tv episodes by title" })
  async searchEpisodes(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search Episodes input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchEpisodePath, expression);
      log(cyan("Search Espisodes url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search Episodes config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search Episodes Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData)
  async searchKeywords(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search Keyword input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchKeywordPath, expression);
      log(cyan("Search Keyword url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search Keyword config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search Keyword Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search movies by titles" })
  async searchMovies(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search Movie input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchMoviePath, expression);
      log(cyan("Search Movies url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search Movies config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search Movies Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search people by name" })
  async searchNames(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search Names input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchNamePath, expression);
      log(cyan("Search Names url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Search Names config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search Names Error: "), e);
      throw new Error("Error");
    }
  }

  @Query(returns => SearchData, { description: "Search tv shows by title" })
  async searchSeries(
    @Arg("searchInput") input: SearchInput
  ): Promise<SearchData | string> {
    try {
      log(magenta("Search Series input: "), input);
      const { expression, language } = input;
      const url = buildUrl(language, searchSeriesPath, expression);
      const config: AxiosRequestConfig = { url };
      log(green("Search Series config: "), config);
      const resp = await getImdbService<SearchData>(config);
      return resp.data;
    } catch (e) {
      log(red("Search Series Error: "), e);
      throw new Error("Error");
    }
  }
}
