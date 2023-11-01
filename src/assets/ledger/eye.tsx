import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#FA4A84"
      d="M8.61 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-3c3.334 0 6.18 2.073 7.334 5-1.154 2.927-4 5-7.334 5-3.333 0-6.18-2.073-7.333-5 1.153-2.927 4-5 7.333-5ZM2.73 8a6.547 6.547 0 0 0 11.76 0A6.548 6.548 0 0 0 2.73 8Z"
    />
  </Svg>
);
export default SvgComponent;
