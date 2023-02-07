import { Layer, Line, Text } from "react-konva";

import SimpleLine from "./SimpleLine";

export type OrLineProps = {
  x?: number;
  y: number;
  stroke?: string;
  height: number;
  width: number;
};

const OrLine = ({ x = 0, y, width, stroke = "black", height }: OrLineProps) => {
  const fontSize = Math.round(0.3 * height);
  const end = 0.4 * width;
  const start = 0.6 * width;
  const firstPoints = [0, 0, end, 0];
  const secondPoints = [start, 0, width, 0];
  const circleRadius = 0.1 * width;
  return (
    <>
      <Line x={x} y={y} points={firstPoints} stroke={stroke} />
      <Text
        text="OR"
        x={x + end}
        fontSize={fontSize}
        y={y - 0.1 * height}
        width={0.2 * width}
        align="center"
      />
      <Line x={x} y={y} points={secondPoints} stroke={stroke} />
    </>
  );
};

export default OrLine;
