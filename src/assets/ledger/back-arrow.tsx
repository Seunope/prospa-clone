import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#04093F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M9.437 1 1.44 9.002 9.437 17"
    />
  </Svg>
);
export default SvgComponent;
