import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import { FullCastResolver } from "./modules/fullcast/resolver";
import { SearchResolver } from "./modules/search";
import { TitleResolver } from "./modules/title";
import { buildSchema } from "type-graphql";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { port } from "./env";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [FullCastResolver, SearchResolver, TitleResolver],
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
