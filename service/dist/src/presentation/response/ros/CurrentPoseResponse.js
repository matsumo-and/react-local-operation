/** 現在位置取得レスポンス */
var CurrentPoseResponse = /** @class */ (function () {
    function CurrentPoseResponse(x, y, theta) {
        this._x = x;
        this._y = y;
        this._theta = theta;
    }
    Object.defineProperty(CurrentPoseResponse.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentPoseResponse.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CurrentPoseResponse.prototype, "theta", {
        get: function () {
            return this._theta;
        },
        set: function (value) {
            this._theta = value;
        },
        enumerable: false,
        configurable: true
    });
    CurrentPoseResponse.prototype.toJson = function () {
        return {
            x: this._x,
            y: this._y,
            theta: this._theta,
        };
    };
    return CurrentPoseResponse;
}());
export default CurrentPoseResponse;
//# sourceMappingURL=CurrentPoseResponse.js.map