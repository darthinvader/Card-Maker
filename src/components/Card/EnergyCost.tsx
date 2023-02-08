import { Image, Layer, Rect, Text } from "react-konva";

export type EnergyProps = {
  energyCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const EnergyCost = ({ energyCost, x, y, width, height }: EnergyProps) => {
  const fontSize = Math.sqrt(width * height) / 2;
  const text = energyCost + "E";

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

export default EnergyCost;
