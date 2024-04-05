class Coordinate {
  private _x: number;

  private _y: number;
  private _theta: number;

  public constructor(x: number, y: number, theta: number) {
    this._x = x;
    this._y = y;
    this._theta = theta;
  }

  public get x(): number {
    return this._x;
  }

  public set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public set y(value: number) {
    this._y = value;
  }

  public get theta(): number {
    return this._theta;
  }

  public set theta(value: number) {
    this._theta = value;
  }
}

export { Coordinate };
