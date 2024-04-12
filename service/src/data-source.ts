import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
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
  logging: true,
  entities: [User],
  migrations: [User1711741565425],
  subscribers: [],
});

/**
 * typeORM Initialize
 */
await AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.name = "test";
    user.password = "test";
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
  })
  .catch((error) => console.log(error));
