import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
  userLogin,
} from "../controllers/users.controller";

import { Router } from "express";

export const router = Router();

router.get("", getUsers);

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);

router.post("/create", createUser);

router.post("/login", userLogin);
