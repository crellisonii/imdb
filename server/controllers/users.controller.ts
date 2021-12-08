import { Request, Response } from "express";

import { UserModel } from "../models";

export const getUsers = async (req: Request, res: Response) => {
  UserModel.find()
    .then(result => {
      res.status(200);
      res.json(result);
    })
    .catch(error => {
      res.status(400);
      res.json(error);
    });
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(result => {
      res.status(200);
      res.json(result);
    })
    .catch(error => {
      res.status(400);
      res.json(error);
    });
};

export const deleteUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  UserModel.deleteOne({ id })
    .then(result => {
      res.status(200);
      res.json(result);
    })
    .catch(error => {
      res.status(400);
      res.json(error);
    });
};

export const createUser = async (req: Request, res: Response) => {
  const { email, hash, firstName, lastName } = req.body;
  const user = new UserModel({
    email,
    firstName,
    lastName,
    hash,
  });
  user
    .save()
    .then(result => {
      res.status(201);
      res.json(result);
    })
    .catch(error => {
      res.status(400);
      res.json(error);
    });
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password, hash } = req.body;
  res.status(200);
};
