import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";

//import currentPoseRouter from "./src/presentation/controller/api/v1/ros/CurrentPoseController.js";
import router from "./src/presentation/controller/api/v1/index.js";
import currentPoseRouter from "./src/presentation/controller/api/v1/ros/CurrentPoseController.js";

dotenv.config();
const app = express();

const corsOptions: cors.CorsOptions = {
  //フロントエンド側のポート番号を設定する
  origin: "http://localhost:8080",
  //認証情報の通信をするためにtrueにする
  credentials: false,
};

/**
 * app settings
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * router settings
 */
app.use("/api/v1/", router);
app.use("/api/v1/ros/", currentPoseRouter);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  res.status(404).json({
    message: "uri not found",
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
    message: "unexpected error occureded",
  });
});

export default app;
