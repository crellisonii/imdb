import dotenv from "dotenv";
dotenv.config();

export const apiKey = process.env.KEY || "";
export const port = process.env.PORT || 4000;
