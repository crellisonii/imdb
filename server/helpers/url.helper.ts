import { baseUrl, searchUrl } from "../constants/imdb-url.constant";

import { apiKey } from "../env";

export const getSearchUrl = (expression: string, language: string) => {
  return `${baseUrl}/${language}${searchUrl}/${apiKey}/${encodeURIComponent(
    expression
  )}`;
};
