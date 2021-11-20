import dotenv from "dotenv";
dotenv.config();

export const apikey = process.env.Key || "";
export const port = process.env.Port || 4000;
