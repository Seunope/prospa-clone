import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={5}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C1335"
      d="M6.178.676 3.5 3.172.822.676 0 1.445l3.5 3.27L7 1.445 6.178.676Z"
    />
  </Svg>
);
export default SvgComponent;
