import { Layer, Line, Text } from "react-konva";

import SimpleLine from "./SimpleLine";

export type OrLineProps = {
  x?: number;
  y: number;
  stroke?: string;
  width: number;
};

const OrLine = ({ x = 0, y, width, stroke = "black" }: OrLineProps) => {
  const fontSize = Math.round(0.06 * width);
  const end = 0.4 * width;
  const start = 0.6 * width;
  const firstPoints = [0, 0, end, 0];
  const secondPoints = [start, 0, width, 0];

  return (
    <Layer x={x} y={y}>
      <Line points={firstPoints} stroke={stroke} />
      <Text
        text="OR"
        x={end}
        fontSize={fontSize}
        y={-0.4 * fontSize}
        width={0.2 * width}
        align="center"
      />
      <Line points={secondPoints} stroke={stroke} />
    </Layer>
  );
};

export default OrLine;
