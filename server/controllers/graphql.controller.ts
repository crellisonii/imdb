import { NextFunction, Request, Response } from "express";
import { blue, log } from "../helpers";

export const graphqlController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  log(blue("graphql req: ", req));
  next();
};

export const playgroundController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  log(process.env.ENABLE_PLAYGROUND);
  if (process.env.ENABLE_PLAYGROUND && req.path === "/playground") {
    next();
  } else {
    res.status(403).end();
  }
};
