import { Image, Layer, Rect, Stage, Text } from "react-konva";

import Border from "./Border";
import EnergyCost from "./EnergyCost";
import LoadedImage from "./LoadedImage";
import Title from "./Title";

const WIDTH = 400;
const HEIGHT = 600;

const Card = () => {
  return (
    <Stage width={WIDTH} height={HEIGHT}>
      <Border width={WIDTH} height={HEIGHT} />
      <EnergyCost
        x={0.02 * WIDTH}
        y={0.02 * HEIGHT}
        energy={5}
        fontSize={0.05 * HEIGHT}
        width={0.05 * WIDTH}
        height={0.05 * HEIGHT}
      />
      <LoadedImage
        x={0.05 * WIDTH}
        y={0.1 * HEIGHT}
        width={0.9 * WIDTH}
        height={0.4 * HEIGHT}
        url="https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg"
      />
      <Title
        text="Random Car"
        fontSize={0.05 * HEIGHT}
        x={0.1 * WIDTH}
        y={0.02 * HEIGHT}
        width={0.8 * WIDTH}
      />
    </Stage>
  );
};

export default Card;
