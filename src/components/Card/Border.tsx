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
    <Layer>
      <Rect width={width} height={height} stroke={"black"} strokeWidth={5} />
    </Layer>
  );
};

export default Border;
