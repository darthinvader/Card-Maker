import { Layer, Text } from "react-konva";

export type TitleProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
};

const Title = ({ x, y, width, height, text }: TitleProps) => {
  const fontSize = (6 * Math.sqrt(width * height)) / (text.length + 20);
  return (
    <Text
      x={x}
      y={y}
      width={width}
      height={height}
      fontSize={fontSize}
      text={text}
      align="center"
      verticalAlign="middle"
    />
  );
};
export default Title;
