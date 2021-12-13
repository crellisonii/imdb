import { Request, Response } from "express";

import { UserModel } from "../models";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.find();
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserModel.findById(id);
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserModel.deleteOne({ id });
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, hash, firstName, lastName } = req.body;
    const user = new UserModel({
      email,
      firstName,
      lastName,
      hash,
    });
    const result = await user.save();
    res.status(201);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const result = await UserModel.findOne({ email });
    if (!result) {
      res.status(401);
      res.send();
    }
    res.status(200);
    res.json(result);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};
