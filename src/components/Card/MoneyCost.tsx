import { Image, Layer, Line, Text } from "react-konva";

import useImage from "use-image";

export type MoneyCostProps = {
  moneyCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const MoneyCost = ({ moneyCost, x, y, width, height }: MoneyCostProps) => {
  const moneyCostString = moneyCost + "M";
  const fontSize = Math.sqrt(width * height) / 5;
  const points = [0, 0, width, 0];
  return (
    <>
      <Line x={x} y={y} points={points} stroke="black" />
      <Text
        x={x}
        y={y}
        width={width}
        height={height}
        text={moneyCostString}
        fontSize={fontSize}
        align="center"
        verticalAlign="middle"
      />
    </>
  );
};

export default MoneyCost;
