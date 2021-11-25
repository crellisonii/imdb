import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

export const getImdbService = <T>(
  config: AxiosRequestConfig
): AxiosPromise<T> => {
  config.method = "GET";
  return axios(config);
};
