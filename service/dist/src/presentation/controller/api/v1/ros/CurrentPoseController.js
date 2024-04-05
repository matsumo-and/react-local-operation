import { CurrentPoseUseCase } from "../../../../../domain/usecase/ros/CurrentPoseUseCase.js";
import CurrentPoseResponse from "../../../../response/ros/CurrentPoseResponse.js";
import express from "express";
var currentPoseRouter = express.Router();
/* currentpose router */
currentPoseRouter.get("/currentPose", function (req, res, next) {
    console.log("aaa");
    var currentPoseController = new CurrentPoseController();
    var rr = currentPoseController.getCurrentPose().toJson();
    console.log(rr);
    res.json(rr);
});
/** 現在位置取得コントローラ */
var CurrentPoseController = /** @class */ (function () {
    function CurrentPoseController(currentPoseUseCase) {
        if (currentPoseUseCase === void 0) { currentPoseUseCase = new CurrentPoseUseCase(); }
        this._currentPoseUseCase = currentPoseUseCase;
    }
    /**
     * 現在のロボットの位置を取得する
     */
    CurrentPoseController.prototype.getCurrentPose = function () {
        var coordinate = this._currentPoseUseCase.getCurrentPose();
        return new CurrentPoseResponse(coordinate.x, coordinate.y, coordinate.theta);
    };
    return CurrentPoseController;
}());
export default currentPoseRouter;
//# sourceMappingURL=CurrentPoseController.js.map