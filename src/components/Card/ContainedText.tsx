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
  return (
    <Layer x={x} y={y}>
      <Text
        width={width}
        height={height}
        text={text}
        align="center"
        fontStyle={italics ? "italic" : undefined}
        verticalAlign="middle"
      />
    </Layer>
  );
};

export default ContainedText;
