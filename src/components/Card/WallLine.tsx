import { Layer, Line } from "react-konva";

export type WallLineProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  tension?: number;
  stroke?: string;
  middleWidth: number;
};

const     WallLine = ({
  x,
  y,
  width,
  height,
  tension,
  stroke,
  middleWidth,
}: WallLineProps) => {
  const middleStart = (width - middleWidth) / 2;
  const middleEnd = (width + middleWidth) / 2;
  const points = [
    0,
    0,
    middleStart,
    0,
    middleStart,
    height,
    middleEnd,
    height,
    middleEnd,
    0,
    width,
    0,
  ];

  return (
    <Layer x={x} y={y}>
      <Line points={points} tension={tension} stroke={stroke} />
    </Layer>
  );
};

export default WallLine;
