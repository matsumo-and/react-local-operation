import { useState } from "react";

interface Point {
  x: number;
  y: number;
}

export default function PointCanvas() {
  const [points, setPoints] = useState<Point[]>([]);

  const addPoint = (event: React.MouseEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPoints([...points, { x, y }]);
  };

  const renderPoints = () => {
    return points.map((point, index) => (
      <circle key={index} cx={point.x} cy={point.y} r={5} fill="blue" />
    ));
  };

  return (
    <svg width="800" height="800" onClick={(event) => addPoint(event)}>
      <rect width="100%" height="100%" fill="green" />
      {renderPoints()}
    </svg>
  );
}
