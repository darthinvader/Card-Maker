import { Image, Layer, Line, Text } from "react-konva";

import useImage from "use-image";

export type MoneyCostProps = {
  moneyCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
};

const MoneyCost = ({
  moneyCost,
  x,
  y,
  width,
  height,
  fontSize,
}: MoneyCostProps) => {
  const [image] = useImage(
    "https://cdn3.iconfinder.com/data/icons/currency-7/512/bitcoin_money_currency_finance_-512.png",
    "anonymous"
  );

  const imageX = moneyCost.toString().length * fontSize * 0.5;

  return (
    <Layer x={x} y={y}>
      <Line points={[0, 0, width, 0]} stroke="black" />
      <Text
        x={0.1 * width}
        y={0.1 * height}
        width={0.8 * width}
        height={0.8 * height}
        text={moneyCost.toString() + "M"}
        fontSize={fontSize}
        align="center"
        verticalAlign="middle"
      />
    </Layer>
  );
};

export default MoneyCost;
