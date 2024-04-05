import { Coordinate } from "../../model/Coordinate.js";
/** 現在位置取得リポジトリ */
var CurrentPoseRepository = /** @class */ (function () {
    function CurrentPoseRepository() {
    }
    /**
     * ROS経由で現在位置を取得する
     */
    CurrentPoseRepository.prototype.getCurrentPose = function () {
        //FIXME: 検証ではランダムに数値を返却する
        var r1 = this.getRandomInt(10);
        var r2 = this.getRandomInt(10);
        var r3 = this.getRandomInt(10);
        var coordinate = new Coordinate(r1, r2, r3);
        return coordinate;
    };
    CurrentPoseRepository.prototype.getRandomInt = function (max) {
        return Math.random() * max;
    };
    return CurrentPoseRepository;
}());
export { CurrentPoseRepository };
//# sourceMappingURL=CurrentPoseRepository.js.map