import dotenv from "dotenv";
dotenv.config();

export const apiKey = process.env.KEY || "";
export const port = process.env.PORT || 4000;
export const dbUsername = process.env.DBUSERNAME;
export const dbPassword = process.env.DBPASSWORD;
export const dbName = process.env.DBNAME;
