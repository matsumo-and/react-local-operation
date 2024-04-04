import { AppDataSource } from "./src/data-source";
import { User } from "./src/infrastructure/db/entity/User";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";

var login = require("./src/presentation/controller/api/v1/login/index");
var indexRouter = require("./src/presentation/controller/index");

dotenv.config();
var app = express();

const corsOptions: cors.CorsOptions = {
  //フロントエンド側のポート番号を設定する
  origin: "http://localhost:8080",
  //認証情報の通信をするためにtrueにする
  credentials: false,
};

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  res.status(404).json({
    message: "error",
    error: "404",
  });
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: "error",
    error: "404",
  });
});

AppDataSource.initialize()
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

module.exports = app;
