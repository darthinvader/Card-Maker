import { Image, Layer, Rect, Text } from "react-konva";

export type SpeedCostProps = {
  speedCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const SpeedCost = ({ speedCost, x, y, width, height }: SpeedCostProps) => {
  const fontSize = Math.sqrt(width * height) / 2;
  const text = speedCost + "S";

  return (
    <>
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="transparent"
        stroke="black"
      />
      <Text
        x={x}
        y={y}
        text={text}
        fontSize={fontSize}
        width={width}
        height={height}
        align="center"
        verticalAlign="middle"
      />
    </>
  );
};

export default SpeedCost;
