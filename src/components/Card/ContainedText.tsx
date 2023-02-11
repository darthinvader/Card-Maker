import { Layer, Text } from "react-konva";

export type ContainedTextProps = {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
  italics?: boolean;
};

const ContainedText = ({
  text,
  x,
  y,
  width,
  height,
  italics,
}: ContainedTextProps) => {
  let fontSize = (15 * Math.sqrt(width * height)) / (text.length + 100);
  return (
    <Text
      x={x}
      y={y}
      width={width}
      height={height}
      text={text}
      align="center"
      fontSize={fontSize}
      fontStyle={italics ? "italic" : undefined}
      verticalAlign="middle"
    />
  );
};

export default ContainedText;
