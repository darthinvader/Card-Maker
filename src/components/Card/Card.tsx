import { Image, Layer, Rect, Stage, Text } from "react-konva";

import Border from "./Border";
import ContainedText from "./ContainedText";
import EnergyCost from "./EnergyCost";
import LoadedImage from "./LoadedImage";
import MoneyCost from "./MoneyCost";
import OrLine from "./OrLine";
import SimpleLine from "./SimpleLine";
import SpeedCost from "./SpeedCost";
import Title from "./Title";
import WallLine from "./WallLine";
import { useRef } from "react";

const WIDTH = 400;
const HEIGHT = 600;

const Card = () => {
  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const stageRef = useRef();

  const handleExport = () => {
    const uri = stageRef?.current?.toDataURL();
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, "stage.png");
  };

  return (
    <div>
      {/* <button onClick={handleExport}> </button> */}
      <Stage ref={stageRef} width={WIDTH} height={HEIGHT}>
        <Layer>
          <Rect width={WIDTH} height={HEIGHT} fill="lightgray" />
        </Layer>
        <Border width={WIDTH} height={HEIGHT} />
        {/* <EnergyCost
          x={0.02 * WIDTH}
          y={0.02 * HEIGHT}
          energy={5}
          fontSize={0.05 * HEIGHT}
          width={0.055 * WIDTH}
          height={0.045 * HEIGHT}
        /> */}
        <SpeedCost
          x={0.02 * WIDTH}
          y={0.02 * HEIGHT}
          speedCost={3}
          fontSize={0.05 * HEIGHT}
          width={0.055 * WIDTH}
          height={0.045 * HEIGHT}
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
        {/* <ContainedText
          x={0.1 * WIDTH}
          y={0.55 * HEIGHT}
          width={0.8 * WIDTH}
          height={0.25 * HEIGHT}
          italics={true}
          text="asddsads"
        /> */}
        {/* <WallLine
          x={0}
          y={0.8 * HEIGHT}
          height={0.05 * HEIGHT}
          width={WIDTH}
          middleWidth={0.1 * WIDTH}
          stroke="black"
        /> */}
        {/* <SimpleLine
          x={0}
          y={0.8 * HEIGHT}
          vertical={false}
          end={WIDTH}
          stroke="black"
        /> */}
        <MoneyCost
          moneyCost={5}
          x={0}
          y={0.85 * HEIGHT}
          width={WIDTH}
          height={0.15 * HEIGHT}
          fontSize={0.1 * HEIGHT}
        />
        {/* <OrLine y={500} width={WIDTH} /> */}
      </Stage>
    </div>
  );
};

export default Card;
