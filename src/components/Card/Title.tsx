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
    <Text
      x={x}
      y={y}
      width={width}
      height={height}
      fontSize={fontSize}
      text={text}
      align="center"
    />
  );
};
export default Title;
