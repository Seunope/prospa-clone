import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FA4A84"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10ZM7 5v2"
    />
    <Circle cx={7} cy={9.051} r={0.75} fill="#FA4A84" />
  </Svg>
);
export default SvgComponent;
