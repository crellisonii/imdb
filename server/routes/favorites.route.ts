import {
  addFavorite,
  deleteFavorite,
  getFavorites,
  getFavoritesById,
  removeFavorite,
} from "../controllers";

import { Router } from "express";

export const router = Router();

router.get("", getFavorites);

router.get("/:userId", getFavoritesById);

router.delete("/:userId", deleteFavorite);

router.post("/:userId/add", addFavorite);

router.post("/:userId/remove", removeFavorite);
