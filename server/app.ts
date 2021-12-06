import "reflect-metadata";

import {
  BoxOfficeResolver,
  ComingSoonResolver,
  FullCastResolver,
  ImageResolver,
  InTheaterResolver,
  MostPopularResolver,
  PosterResolver,
  RatingResolver,
  SearchResolver,
  SeasonEpisodeResolver,
  TitleResolver,
  TrailerResolver,
  UserRatingResolver,
  WikipediaResolver,
} from "./modules";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { port } from "./env";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      BoxOfficeResolver,
      ComingSoonResolver,
      FullCastResolver,
      ImageResolver,
      InTheaterResolver,
      MostPopularResolver,
      PosterResolver,
      RatingResolver,
      SearchResolver,
      SeasonEpisodeResolver,
      TitleResolver,
      TrailerResolver,
      UserRatingResolver,
      WikipediaResolver,
    ],
  });

  const server = new ApolloServer({
    schema,
  });

  const app = express();

  app.use(morgan("dev"));

  app.use(express.urlencoded({ extended: false }));

  app.use(express.json());

  app.use(cors());

  await server.start();

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(
      `Server is running, GraphQL Playground available at http://localhost${port}/playground`
    );
  });
}

bootstrap();
