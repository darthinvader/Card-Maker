import { Layer, Rect } from "react-konva";

export type BorderProps = {
  width: number;
  height: number;
  x?: number;
  y?: number;
  stroke?: CanvasGradient | string;
  strokeWidth?: number;
};

const Border = ({ width, height, x, y }: BorderProps) => {
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      stroke={"black"}
      strokeWidth={5}
    />
  );
};

export default Border;
