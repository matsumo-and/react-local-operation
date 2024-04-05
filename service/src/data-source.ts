import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./infrastructure/db/entity/User.js";
import { User1711741565425 } from "./infrastructure/db/migration/1711741565425-User.js";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_ROOT_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [User1711741565425],
  subscribers: [],
});
