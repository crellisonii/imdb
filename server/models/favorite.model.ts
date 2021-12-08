import { Schema, model } from "mongoose";

enum FAVORITE_TYPE {
  MOVIE = "movie",
  TV = "tv",
  PERSON = "person",
}

interface FavoriteItem {
  id: string;
  type: FAVORITE_TYPE;
}

interface Favorites {
  userId: string;
  items: FavoriteItem[];
}

const favoriteItemSchema = new Schema<FavoriteItem>({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const favoriteSchema = new Schema<Favorites>({
  items: {
    type: [favoriteItemSchema],
    required: true,
  },
  userId: {
    required: true,
    type: String,
    unique: true,
  },
});

export const FavoriteModel = model<Favorites>("Favorites", favoriteSchema);
