import { Image, Layer, Text } from "react-konva";

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
  const [image] = useImage("https://pic.onlinewebfonts.com/svg/img_428473.png");
  const imageX = energy.toString().length * fontSize * 0.6;
  return (
    <Layer x={x} y={y}>
        <Text text={energy.toString()} fontSize={fontSize} />
      <Image image={image} width={width} height={height} x={imageX} />
    </Layer>
  );
};

export default EnergyCost;
