import { apiKey } from "../env";

const baseUrl = "https://imdb-api.com";

export const buildUrl = (
  language: string,
  callLocation: string,
  pathParams?: string
): string => {
  const url = `${baseUrl}/${language}/API${callLocation}/${apiKey}`;
  return pathParams ? `${url}${pathParams}` : url;
};
