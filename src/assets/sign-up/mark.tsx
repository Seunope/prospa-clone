import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <Rect
      width={25.9}
      height={25.9}
      fill="#4CD964"
      fillOpacity={0.2}
      rx={12.95}
    />
    <Path
      stroke="#4CD964"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m16.747 10.705-5.415 5.416-2.527-2.527"
    />
  </Svg>
);
export default SvgComponent;
