import { Image, Layer, Rect, Stage, Text } from "react-konva";

const WIDTH = 400;
const HEIGHT = 600;

const Card = () => {
  
  return (
    <Stage width={WIDTH} height={HEIGHT}>
      <Layer>
        <Rect
          x={0}
          y={0}
          width={400}
          height={600}
          stroke="black"
          strokeWidth={3}
          fill={"transparent"}
        />
      </Layer>
    </Stage>
  );
};

export default Card;
