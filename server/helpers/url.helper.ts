import { baseUrl, searchMovieUrl, searchSeriesUrl } from "../constants";

import { apiKey } from "../env";

const getUrlPrefix = (language: string): string => {
  return `${baseUrl}/${language}/API`;
};

const getUrlSuffix = (expression: string): string => {
  return `/${apiKey}/${expression}`;
};

export const getSearchMovieUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchMovieUrl}${getUrlSuffix(
    expression
  )}`;
};

export const getSearchSeriesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchSeriesUrl}${getUrlSuffix(
    expression
  )}`;
};
