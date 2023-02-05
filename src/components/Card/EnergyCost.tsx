import { Image, Layer, Rect, Text } from "react-konva";

import useImage from "use-image";

export type EnergyProps = {
  energyCost: number;
  x?: number;
  y?: number;
  width: number;
  height: number;
};

const EnergyCost = ({ energyCost, x, y, width, height }: EnergyProps) => {
  const [image] = useImage(
    "https://cdn.onlinewebfonts.com/svg/img_449763.png",
    "anonymous"
  );
  const fontSize = 0.9 * Math.min(width, height);
  const text = energyCost + "E";

  return (
    <Layer x={x} y={y}>
      <Rect
        width={width}
        height={height}
        fill="transparent"
        shadowBlur={10}
        shadowColor="black"
        stroke="black"
      />
      <Text
        text={text}
        fontSize={fontSize}
        width={width}
        height={height}
        align="center"
        verticalAlign="middle"
      />
    </Layer>
  );
};

export default EnergyCost;
