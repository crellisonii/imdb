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
  favoriteItems: FavoriteItem[];
}

const favoriteItemSchema = new Schema<FavoriteItem>(
  {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// favoriteItemSchema.pre("validate", function (next) {
//   console.log("item id: ", this.id);
//   console.log("item type: ", this.type);
//   if (!this.id) {
//     return next(new Error("A favorite item id must be provided"));
//   }
//   if (!this.type) {
//     return next(new Error("A favorite item type must be provided"));
//   }
//   next();
// });

const favoriteSchema = new Schema<Favorites>(
  {
    favoriteItems: {
      type: [favoriteItemSchema],
      required: false,
    },
    userId: {
      required: true,
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

favoriteSchema.pre("save", function (next) {
  console.log("userId: ", this.userId);
  if (!this.userId || this.userId === null) {
    return next(new Error("The user id must be provided"));
  }
  next();
});

export const FavoriteModel = model<Favorites>("Favorites", favoriteSchema);
