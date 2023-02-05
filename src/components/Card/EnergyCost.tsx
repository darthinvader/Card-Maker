import { Image, Layer, Rect, Text } from "react-konva";

import useImage from "use-image";

export type EnergyProps = {
  energy: number;
  x?: number;
  y?: number;
  fontSize: number;
  width: number;
  height: number;
};

const EnergyCost = ({ energy, x, y, fontSize, width, height }: EnergyProps) => {
  const [image] = useImage(
    "https://cdn.onlinewebfonts.com/svg/img_449763.png",
    "anonymous"
  );
  const imageX = energy.toString().length * fontSize * 0.6;
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
      <Text text={energy.toString()} fontSize={fontSize} />
      <Image image={image} width={width} height={height} x={imageX} />
    </Layer>
  );
};

export default EnergyCost;
