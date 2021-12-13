import { Request, Response } from "express";
import { blue, cyan, green, log, magenta, red, yellow } from "../utils";

import { FavoriteModel } from "../models";

export const getFavorites = async (req: Request, res: Response) => {
  try {
    const result = await FavoriteModel.find();
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const getFavoritesById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await FavoriteModel.findOne({ userId });
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const deleteFavorite = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await FavoriteModel.deleteOne({ userId });
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const addFavorite = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params,
      { id, type } = req.body;
    const result = await FavoriteModel.findOneAndUpdate(
      { userId },
      { $push: { favoriteItems: { id, type } } },
      { new: true, upsert: true, runValidators: true }
    ).exec();
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params,
      { id } = req.body;
    const result = await FavoriteModel.updateOne(
      { userId },
      { $pull: { favoriteItems: { id } } },
      { new: true }
    );
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};
