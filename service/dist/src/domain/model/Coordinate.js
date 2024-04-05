var Coordinate = /** @class */ (function () {
    function Coordinate(x, y, theta) {
        this._x = x;
        this._y = y;
        this._theta = theta;
    }
    Object.defineProperty(Coordinate.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordinate.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coordinate.prototype, "theta", {
        get: function () {
            return this._theta;
        },
        set: function (value) {
            this._theta = value;
        },
        enumerable: false,
        configurable: true
    });
    return Coordinate;
}());
export { Coordinate };
//# sourceMappingURL=Coordinate.js.map