import { Image, Layer, Line, Text } from "react-konva";

import useImage from "use-image";

export type MoneyCostProps = {
  moneyCost: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

const MoneyCost = ({ moneyCost, x, y, width, height }: MoneyCostProps) => {
  const [image] = useImage(
    "https://cdn3.iconfinder.com/data/icons/currency-7/512/bitcoin_money_currency_finance_-512.png",
    "anonymous"
  );
  const moneyCostString = moneyCost + "M";
  const fontSize = 0.7 * Math.min(height, width);
  const points = [0, 0, width, 0];
  return (
    <Layer x={x} y={y}>
      <Line points={points} stroke="black" />
      <Text
        width={width}
        height={height}
        text={moneyCostString}
        fontSize={fontSize}
        align="center"
        verticalAlign="middle"
      />
    </Layer>
  );
};

export default MoneyCost;
