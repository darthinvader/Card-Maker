import { Layer, Text } from "react-konva";

export type TitleProps = {
  x: number;
  y: number;
  width: number;
  height?: number;
  fontSize: number;
  text: string;
};

const Title = ({ x, y, width, height, fontSize, text }: TitleProps) => {
  return (
    <Layer x={x} y={y}>
      <Text
        width={width}
        height={height}
        fontSize={fontSize}
        text={text}
        align="center"
      />
    </Layer>
  );
};
export default Title;
