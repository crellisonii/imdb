import {
  baseUrl,
  searchAllUrl,
  searchCompanyUrl,
  searchEpisodesUrl,
  searchMovieUrl,
  searchNameUrl,
  searchSeriesUrl,
} from "../constants";

import { apiKey } from "../env";

const getUrlPrefix = (language: string): string => {
  return `${baseUrl}/${language}/API`;
};

const getUrlSuffix = (expression: string): string => {
  return `/${apiKey}/${expression}`;
};

export const getSearchAllUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchAllUrl}${getUrlSuffix(expression)}`;
};

export const getSearchCompanyUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchCompanyUrl}${getUrlSuffix(
    expression
  )}`;
};

export const getSearchEpisodesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchEpisodesUrl}${getUrlSuffix(
    expression
  )}`;
};

export const getSearchMoviesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchMovieUrl}${getUrlSuffix(
    expression
  )}`;
};

export const getSearchNamesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchNameUrl}${getUrlSuffix(expression)}`;
};

export const getSearchSeriesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchSeriesUrl}${getUrlSuffix(
    expression
  )}`;
};
