import "reflect-metadata";

import {
  BoxOfficeResolver,
  ComingSoonResolver,
  CompanyResolver,
  FullCastResolver,
  ImageResolver,
  InTheaterResolver,
  KeywordResolver,
  MostPopularResolver,
  NameResolver,
  PosterResolver,
  RatingResolver,
  ReviewResolver,
  SearchResolver,
  SeasonEpisodeResolver,
  TitleResolver,
  TrailerResolver,
  UserRatingResolver,
  WikipediaResolver,
} from "./modules";
import { blue, log, red } from "./utils";
import { dbName, dbPassword, dbUsername, port } from "./env";
import { favoritesRouter, usersRouter } from "./routes";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { connect } from "mongoose";
import cors from "cors";
import express from "express";
import morgan from "morgan";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      BoxOfficeResolver,
      ComingSoonResolver,
      CompanyResolver,
      FullCastResolver,
      ImageResolver,
      InTheaterResolver,
      KeywordResolver,
      MostPopularResolver,
      NameResolver,
      PosterResolver,
      RatingResolver,
      ReviewResolver,
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

  app.use("/api/users", usersRouter);

  app.use("/api/favorites", favoritesRouter);

  await server.start();

  server.applyMiddleware({ app });

  const dbURI = `mongodb+srv://${dbUsername}:${dbPassword}@my-imdb.jcxxj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  connect(dbURI)
    .then(result => {
      log(blue("Connected to the db!!"));

      app.listen(port, () => {
        console.log(
          `Server is running, GraphQL Playground available at http://localhost:${port}/playground`
        );
      });
    })
    .catch(err => {
      log(red("Error!!"), err);
    });
}

bootstrap();
