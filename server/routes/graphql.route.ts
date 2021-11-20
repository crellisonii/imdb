import { graphqlController, playgroundController } from "../controllers";

import express from "express";

export const router = express.Router();

router.all("/graphql", graphqlController);
router.all("/playground", playgroundController);
