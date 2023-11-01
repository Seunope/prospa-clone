import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Circle cx={22} cy={22} r={22} fill="#CDD5DD" />
  </Svg>
);
export default SvgComponent;
