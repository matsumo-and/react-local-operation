import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { User1711741565425 } from "./migration/1711741565425-User";
require("dotenv").config();

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
