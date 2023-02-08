import { Rect, Text } from "react-konva";

export type ActionTypeProps = {
  variant: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const ActionType = ({ x, y, width, height, variant }: ActionTypeProps) => {
  const fontSize = Math.floor(Math.sqrt(width * height) / 2);
  return (
    <>
      <Rect x={x} y={y} width={width} height={height} stroke="black" />
      <Text
        x={x}
        y={y}
        width={width}
        height={height}
        text={variant.substring(0, 3)}
        fontSize={fontSize}
        align="center"
        verticalAlign="middle"
      />
    </>
  );
};

export default ActionType;
