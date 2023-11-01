import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#8397AB"
      d="M8.75 10.2c0 .47-.392.85-.875.85h-3.5a.863.863 0 0 1-.875-.85c0-.47.392-.85.875-.85h3.5c.483 0 .875.38.875.85ZM10.5 6.8c0 .47-.392.85-.875.85h-5.25A.863.863 0 0 1 3.5 6.8c0-.47.392-.85.875-.85h5.25c.483 0 .875.38.875.85Z"
    />
    <Path
      fill="#8397AB"
      fillRule="evenodd"
      d="M13.487 3.752c.329.319.513.751.513 1.202V15.3c0 .939-.784 1.7-1.75 1.7H1.75C.784 17 0 16.239 0 15.3V1.7C0 .761.784 0 1.75 0H8.9c.464 0 .91.18 1.238.498l3.35 3.254ZM12.25 4.954V15.3H1.75V1.7H8.9l3.35 3.254Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
