import {
  baseUrl,
  fullCastUrl,
  searchAllUrl,
  searchCompanyUrl,
  searchEpisodesUrl,
  searchMovieUrl,
  searchNameUrl,
  searchSeriesUrl,
  titleUrl,
} from "../constants";

import { apiKey } from "../env";

const getUrlPrefix = (language: string): string => {
  return `${baseUrl}/${language}/API`;
};

const getFullCastSuffix = (id: string): string => {
  return `/${apiKey}/${id}`;
};

const getSearchUrlSuffix = (expression: string): string => {
  return `/${apiKey}/${expression}`;
};

const getTitleUrlSuffix = (id: string, options: string): string => {
  return `/${apiKey}/${id}/${options}`;
};

export const getFullCastUrl = (id: string, language: string): string => {
  return `${getUrlPrefix(language)}${fullCastUrl}${getFullCastSuffix(id)}`;
};

export const getSearchAllUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchAllUrl}${getSearchUrlSuffix(
    expression
  )}`;
};

export const getSearchCompanyUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchCompanyUrl}${getSearchUrlSuffix(
    expression
  )}`;
};

export const getSearchEpisodesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchEpisodesUrl}${getSearchUrlSuffix(
    expression
  )}`;
};

export const getSearchMoviesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchMovieUrl}${getSearchUrlSuffix(
    expression
  )}`;
};

export const getSearchNamesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchNameUrl}${getSearchUrlSuffix(
    expression
  )}`;
};

export const getSearchSeriesUrl = (expression: string, language: string) => {
  return `${getUrlPrefix(language)}${searchSeriesUrl}${getSearchUrlSuffix(
    expression
  )}`;
};

export const getTitleUrl = (id: string, language: string, options: string) => {
  return `${getUrlPrefix(language)}${titleUrl}${getTitleUrlSuffix(
    id,
    options
  )}`;
};
