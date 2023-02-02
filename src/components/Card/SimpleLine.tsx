import { Layer, Line } from "react-konva";

export type SimpleLineProps = {
  x: number;
  y: number;
  start?: number;
  end: number;
  vertical?: boolean;
  tension?: number;
  stroke?: string;
};
const SimpleLine = ({
  x,
  y,
  start = 0,
  end,
  vertical = true,
  tension,
  stroke = "black",
}: SimpleLineProps) => {
  const points = vertical ? [0, start, 0, end] : [start, 0, end, 0];
  console.log(points);

  return (
    <Layer x={x} y={y}>
      <Line points={points} tension={tension} stroke={stroke} />
    </Layer>
  );
};

export default SimpleLine;
