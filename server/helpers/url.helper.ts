import {
  baseUrl,
  fullCastUrl,
  imageUrl,
  posterUrl,
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

const getUrlSuffix = (id: string): string => {
  return `/${apiKey}/${id}`;
};

const getSearchUrlSuffix = (expression: string): string => {
  return `/${apiKey}/${expression}`;
};

export const getFullCastUrl = (id: string, language: string): string => {
  return `${getUrlPrefix(language)}${fullCastUrl}${getUrlSuffix(id)}`;
};

export const getImageUrl = (
  id: string,
  language: string,
  options: string
): string => {
  return `${getUrlPrefix(language)}${imageUrl}${getUrlSuffix(id)}/${options}`;
};

export const getPosterUrl = (id: string, language: string): string => {
  return `${getUrlPrefix(language)}${posterUrl}${getUrlSuffix(id)}`;
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
  return `${getUrlPrefix(language)}${titleUrl}${getUrlSuffix(id)}/${options}`;
};
