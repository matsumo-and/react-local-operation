import Coordinate from "../../model/Coordinate.js";

/** 現在位置取得リポジトリ */
class CurrentPoseRepository {
  public constructor() {}

  /**
   * ROS経由で現在位置を取得する
   */
  public getCurrentPose(): Coordinate {
    //FIXME: 検証ではランダムに数値を返却する
    const r1 = this.getRandomInt(10);
    const r2 = this.getRandomInt(10);
    const r3 = this.getRandomInt(10);

    const coordinate: Coordinate = new Coordinate(r1, r2, r3);

    return coordinate;
  }

  private getRandomInt(max: number): number {
    return Math.random() * max;
  }
}

export default CurrentPoseRepository;
