import { CurrentPoseRepository } from "../../repository/ros/CurrentPoseRepository.js";
/** 現在位置取得ユースケース */
var CurrentPoseUseCase = /** @class */ (function () {
    function CurrentPoseUseCase(currentPoseRepository) {
        if (currentPoseRepository === void 0) { currentPoseRepository = new CurrentPoseRepository(); }
        this.currentPoseRepository = currentPoseRepository;
    }
    /**
     * ROS経由で現在位置を取得する
     */
    CurrentPoseUseCase.prototype.getCurrentPose = function () {
        var coordinate = this.currentPoseRepository.getCurrentPose();
        return coordinate;
    };
    return CurrentPoseUseCase;
}());
export { CurrentPoseUseCase };
//# sourceMappingURL=CurrentPoseUseCase.js.map