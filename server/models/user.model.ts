import { Schema, model } from "mongoose";

interface User {
  email: string;
  firstName: string;
  lastName: string;
  hash: string;
}

const usersSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = model<User>("Users", usersSchema);
