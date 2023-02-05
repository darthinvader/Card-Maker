import { Image, Layer, Rect, Text } from "react-konva";

import useImage from "use-image";

export type SpeedCostProps = {
  speedCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
};

const SpeedCost = ({
  speedCost,
  x,
  y,
  width,
  height,
  fontSize,
}: SpeedCostProps) => {
  const [image] = useImage(
    "https://cdn-icons-png.flaticon.com/512/2612/2612924.png",
    "anonymous"
  );

  const imageX = speedCost.toString().length * fontSize * 0.6;

  return (
    <Layer x={x} y={y}>
      <Rect
        x={-0.15 * width}
        y={-0.2 * height}
        width={imageX + 1.3 * width}
        height={1.4 * height}
        fill="transparent"
        shadowBlur={10}
        shadowColor="black"
        stroke="black"
      />
      <Text text={speedCost.toString()} fontSize={fontSize} />
      <Image image={image} width={width} height={height} x={imageX} />
    </Layer>
  );
};

export default SpeedCost;
