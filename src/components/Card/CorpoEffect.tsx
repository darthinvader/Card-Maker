import { Layer, Line } from "react-konva";

import ContainedText from "./ContainedText";
import EnergyCost from "./EnergyCost";
import MoneyCost from "./MoneyCost";
import OrLine from "./OrLine";
import SimpleLine from "./SimpleLine";
import SpeedCost from "./SpeedCost";
import Title from "./Title";
import WallLine from "./WallLine";

export type CorpoEffectProps = {
  x: number;
  y: number;
  effect: string;
  funtext: string;
  money: number;
  speedCost: number;
  energyCost: number;
  width: number;
  height: number;
};
const CorpoEffect = ({
  x,
  y,
  effect,
  funtext,
  money,
  speedCost,
  energyCost,
  width,
  height,
}: CorpoEffectProps) => {
  const wallLinePitWidth = 0.1 * width;
  const wallLinePitHeight = 0.1 * height;
  const leftPadding = 0.1 * width;
  const middleWidth = 0.8 * width;
  const effectPaddingTop = 0.1 * height;
  const effectHeight = 0.4 * height;
  const funTextPaddingTop = 0.6 * height;
  const funTextHeight = 0.4 * height;
  const moneyHeight = 0.1 * height;
  const speedHeight = 0.1 * height;
  const moneyFontSize = 0.1 * height;
  const CardEnergyCost = () => (
    <EnergyCost
      x={0.85 * width}
      y={0.4 * height}
      energyCost={energyCost}
      width={0.15 * width}
      height={0.07 * height}
    />
  );
  const CardSpeedCost = () => (
    <SpeedCost
      speedCost={speedCost}
      x={0.85 * width}
      y={0.7 * height}
      width={width}
      height={speedHeight}
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
    <Title
      x={0}
      y={0}
      text={money.toString() + "M"}
      width={width}
      height={moneyHeight}
      fontSize={moneyFontSize}
    />
  );
  const CardWallLine = () => (
    <WallLine
      x={0}
      y={0}
      width={width}
      height={wallLinePitHeight}
      middleWidth={wallLinePitWidth}
    />
  );

  return (
    <Layer x={x} y={y}>
      <CardWallLine />
      <CardMoneyCost />
      <CardSpeedCost />
      <CardEnergyCost />
      <CardEffect />
      <CardFunText />
    </Layer>
  );
};

export default CorpoEffect;
