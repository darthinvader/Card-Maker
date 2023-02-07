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
  const maxSize = Math.sqrt(width * height) / 8;
  const minSize = Math.sqrt(width * height) / 10;
  let fontSize = Math.sqrt(height * width) / text.length;
  fontSize = Math.min(maxSize, fontSize);
  fontSize = Math.max(minSize, fontSize);
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
