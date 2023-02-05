import { Image, Layer } from "react-konva";

import useImage from "use-image";

export type LoadedImageProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
};
const LoadedImage = ({ x, y, width, height, url }: LoadedImageProps) => {
  const [image] = useImage(url, "anonymous");
  return (
    <Layer x={x} y={y}>
      <Image width={width} height={height} image={image} />
    </Layer>
  );
};
export default LoadedImage;
