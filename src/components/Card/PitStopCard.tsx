import { Layer, Stage } from "react-konva";

import Border from "./Border";
import ContainedText from "./ContainedText";
import LoadedImage from "./LoadedImage";
import Title from "./Title";

export type PitStopCardProps = {
  width: number;
  height: number;
  title: string;
  url: string;
  effect: string;
  funtext: string;
};

const PitStopCard = ({
  width,
  height,
  title,
  url,
  effect,
  funtext,
}: PitStopCardProps) => {
  const leftPadding = 0.1 * width;
  const titlePaddingTop = 0.01 * height;
  const imagePaddignTop = 0.1 * height;
  const imageHeight = 0.3 * height;
  const middleWidth = 0.8 * width;
  const effectPaddingTop = 0.5 * height;
  const effectHeight = 0.25 * height;
  const funTextPaddingTop = 0.75 * height;
  const funTextHeight = 0.25 * height;

  const CardTitle = () => (
    <Title
      x={leftPadding}
      y={titlePaddingTop}
      width={middleWidth}
      height={0.05 * height}
      text={title}
      fontSize={0.05 * height}
    />
  );
  const CardImage = () => (
    <LoadedImage
      x={leftPadding}
      y={imagePaddignTop}
      height={imageHeight}
      width={middleWidth}
      url={url}
    />
  );

  const CardEffect = () => (
    <ContainedText
      x={leftPadding}
      y={effectPaddingTop}
      width={middleWidth}
      height={effectHeight}
      text={effect}
    />
  );
  const CardFunText = () => (
    <ContainedText
      x={leftPadding}
      y={funTextPaddingTop}
      width={middleWidth}
      height={funTextHeight}
      text={funtext}
      italics
    />
  );

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Border width={width} height={height} />
        <CardTitle />
        <CardImage />
        <CardEffect />
        <CardFunText />
      </Layer>
    </Stage>
  );
};
export default PitStopCard;
