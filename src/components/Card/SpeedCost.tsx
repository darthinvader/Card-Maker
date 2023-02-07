import { Image, Layer, Rect, Text } from "react-konva";

import useImage from "use-image";

export type SpeedCostProps = {
  speedCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const SpeedCost = ({ speedCost, x, y, width, height }: SpeedCostProps) => {
  const [image] = useImage(
    "https://cdn-icons-png.flaticon.com/512/2612/2612924.png",
    "anonymous"
  );
  const text = speedCost + "S";
  const fontSize = 0.9 * Math.min(width, height);

  return (
    <>
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="transparent"
        shadowBlur={10}
        shadowColor="black"
        stroke="black"
      />
      <Text x={x} y={y} text={text} fontSize={fontSize} />
    </>
  );
};

export default SpeedCost;
