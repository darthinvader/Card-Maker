import { Layer, Stage } from "react-konva";

import Border from "./Border";
import ContainedText from "./ContainedText";
import EnergyCost from "./EnergyCost";
import LoadedImage from "./LoadedImage";
import MoneyCost from "./MoneyCost";
import Title from "./Title";

export type ActionCardProps = {
  width: number;
  height: number;
  title: string;
  url: string;
  energyCost: number;
  moneyCost: number;
  effect: string;
  funtext: string;
};

const ActionCard = ({
  width,
  height,
  title,
  url,
  energyCost,
  moneyCost,
  effect,
  funtext,
}: ActionCardProps) => {
  const leftPadding = 0.1 * width;
  const titlePaddingTop = 0.01 * height;
  const imagePaddignTop = 0.1 * height;
  const imageHeight = 0.3 * height;
  const middleWidth = 0.8 * width;
  const effectPaddingTop = 0.5 * height;
  const effectHeight = 0.2 * height;
  const funTextPaddingTop = 0.7 * height;
  const funTextHeight = 0.2 * height;
  const moneyCostHeight = 0.1 * height;
  const moneyCostPaddingTop = 0.9 * height;
  const CardEnergyCost = () => (
    <EnergyCost
      x={10}
      y={10}
      energyCost={energyCost}
      width={0.15 * width}
      height={0.07 * height}
    />
  );

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

  const CardMoneyCost = () => (
    <MoneyCost
      moneyCost={moneyCost}
      x={0}
      y={moneyCostPaddingTop}
      width={width}
      height={moneyCostHeight}
    />
  );

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Border width={width} height={height} />
        <CardEnergyCost />
        <CardTitle />
        <CardImage />
        <CardEffect />
        <CardFunText />
        <CardMoneyCost />
      </Layer>
    </Stage>
  );
};
export default ActionCard;
