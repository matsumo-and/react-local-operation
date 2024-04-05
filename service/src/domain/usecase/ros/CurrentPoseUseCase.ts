import { Coordinate } from "../../model/Coordinate.js";
import { CurrentPoseRepository } from "../../repository/ros/CurrentPoseRepository.js";

/** 現在位置取得ユースケース */
class CurrentPoseUseCase {
  private currentPoseRepository: CurrentPoseRepository;

  public constructor(
    currentPoseRepository: CurrentPoseRepository = new CurrentPoseRepository()
  ) {
    this.currentPoseRepository = currentPoseRepository;
  }

  /**
   * ROS経由で現在位置を取得する
   */
  public getCurrentPose(): Coordinate {
    const coordinate: Coordinate = this.currentPoseRepository.getCurrentPose();

    return coordinate;
  }
}

export { CurrentPoseUseCase };
