import CurrentPoseUseCase from "../../../../../domain/usecase/ros/CurrentPoseUseCase.js";
import Coordinate from "../../../../../domain/model/Coordinate.js";
import CurrentPoseResponse from "../../../../response/ros/CurrentPoseResponse.js";
import express from "express";
import { AppDataSource } from "../../../../../data-source.js";
import { User } from "../../../../../infrastructure/db/entity/User.js";
import dotenv from "dotenv";

const currentPoseRouter = express.Router();

/* currentpose router */
currentPoseRouter.get(
  "/currentPose",
  function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const currentPoseController: CurrentPoseController =
      new CurrentPoseController();

    const rr = currentPoseController.getCurrentPose().toJson();

    res.json(rr);
  }
);

/** 現在位置取得コントローラ */
class CurrentPoseController {
  private _currentPoseUseCase: CurrentPoseUseCase;

  public constructor(
    currentPoseUseCase: CurrentPoseUseCase = new CurrentPoseUseCase()
  ) {
    this._currentPoseUseCase = currentPoseUseCase;
  }

  /**
   * 現在のロボットの位置を取得する
   */
  public getCurrentPose() {
    const coordinate: Coordinate = this._currentPoseUseCase.getCurrentPose();

    return new CurrentPoseResponse(
      coordinate.x,
      coordinate.y,
      coordinate.theta
    );
  }
}

/* currentpose router */
currentPoseRouter.get(
  "/test",
  async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const users = await AppDataSource.manager.find(User);

    res.json(users);
  }
);

export default currentPoseRouter;
