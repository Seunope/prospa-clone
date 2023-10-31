import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#FA4A84"
      fillRule="evenodd"
      d="M0 7.43c0-.439.176-.859.488-1.168L6.321.484a1.678 1.678 0 0 1 2.357 0l5.834 5.778c.312.31.488.73.488 1.167v6.745a.83.83 0 0 1-.833.826h-5a.83.83 0 0 1-.834-.825v-4.128H6.667v4.127a.83.83 0 0 1-.834.826h-5A.83.83 0 0 1 0 14.175V7.428Zm7.5-5.78L1.667 7.43v5.92H5V9.221a.83.83 0 0 1 .833-.826h3.334c.46 0 .833.37.833.826v4.127h3.333V7.43L7.5 1.651Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
