import { Layer, Stage } from "react-konva";

import Border from "./Border";
import ContainedText from "./ContainedText";
import CorpoEffect from "./CorpoEffect";
import EnergyCost from "./EnergyCost";
import LoadedImage from "./LoadedImage";
import MoneyCost from "./MoneyCost";
import OrLine from "./OrLine";
import SpeedCost from "./SpeedCost";
import Title from "./Title";

export type CorpoCardProps = {
  height: number;
  width: number;
  title: string;
  url: string;
  energyCost1: number;
  speedCost1: number;
  money1: number;
  effect1: string;
  funtext1: string;
  energyCost2: number;
  speedCost2: number;
  money2: number;
  effect2: string;
  funtext2: string;
};

const CorpoCard = ({
  height,
  width,
  title,
  url,
  energyCost1,
  speedCost1,
  money1,
  effect1,
  funtext1,
  energyCost2,
  speedCost2,
  money2,
  effect2,
  funtext2,
}: CorpoCardProps) => {
  const leftPadding = 0.1 * width;
  const titlePaddingTop = 0.01 * height;
  const imagePaddignTop = 0.1 * height;
  const imageHeight = 0.3 * height;
  const middleWidth = 0.8 * width;
  const effectPaddingTop1 = 0.45 * height;
  const effectHeightTop1 = 0.2 * height;
  const effectPaddingTop2 = 0.75 * height;
  const effectHeightTop2 = 0.2 * height;
  const orPaddingTop = 0.7 * height;
  const orHeight = 0.1 * height;

  const CardTitle = () => (
    <Title
      x={leftPadding}
      y={titlePaddingTop}
      width={middleWidth}
      height={0.09 * height}
      text={title}
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
  const CorpoEffect1 = () => (
    <CorpoEffect
      x={0}
      y={effectPaddingTop1}
      height={effectHeightTop1}
      width={width}
      effect={effect1}
      funtext={funtext1}
      speedCost={speedCost1}
      energyCost={energyCost1}
      money={money1}
    />
  );

  const CardOrLine = () => (
    <OrLine y={orPaddingTop} width={width} height={orHeight} />
  );

  const CorpoEffect2 = () => (
    <CorpoEffect
      x={0}
      y={effectPaddingTop2}
      height={effectHeightTop2}
      width={width}
      effect={effect2}
      funtext={funtext2}
      speedCost={speedCost2}
      energyCost={energyCost2}
      money={money2}
    />
  );

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Border width={width} height={height} />
        <CardTitle />
        <CardImage />
        <CardOrLine />
      </Layer>
      <CorpoEffect1 />
      <CorpoEffect2 />
    </Stage>
  );
};
export default CorpoCard;
