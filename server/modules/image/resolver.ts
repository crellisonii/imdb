import { AxiosRequestConfig } from "axios";
import { Arg, Query, Resolver } from "type-graphql";
import { ImageData, ImageInput } from ".";
import { imagePath } from "../../constants";
import { buildUrl } from "../../helpers";
import { getImdbService } from "../../services";
import { cyan, green, log, magenta, red } from "../../utils";

@Resolver()
export class ImageResolver {
  @Query(returns => ImageData, {
    description: "Get the images for the given id",
  })
  async getImages(
    @Arg("imageInput") input: ImageInput
  ): Promise<ImageData | string> {
    try {
      log(magenta("Image input: "), magenta(JSON.stringify(input)));
      const { id, language, options } = input;
      const url = buildUrl(language, imagePath, `/${id}/${options}`);
      log(cyan("Images url: "), url);
      const config: AxiosRequestConfig = { url };
      log(green("Image options: "), green(JSON.stringify(config)));
      const resp = await getImdbService<ImageData>(config);
      return resp.data;
    } catch (e) {
      log(red("Image Error: "), red(JSON.stringify(e)));
      throw new Error("Error");
    }
  }
}
