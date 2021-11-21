import axios, { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { ImageData, ImageInput } from ".";
import { getImageUrl, green, log, magenta, red } from "../../helpers";

@Resolver()
export class ImageResolver {
  @Query(returns => ImageData, {
    description: "Get the images for the given id",
  })
  async getImages(
    @Arg("imageInput") input: ImageInput
  ): Promise<ImageData | string> {
    try {
      log(magenta("FullCast input: "), magenta(JSON.stringify(input)));
      const { id, language, options } = input;
      const url = getImageUrl(id, language, options);
      const config: AxiosRequestConfig = {
        url,
        method: "GET",
      };
      log(green("FullCast options: "), green(JSON.stringify(config)));
      const resp = await axios(config);
      return resp.data;
    } catch (e) {
      log(red("FullCast Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}