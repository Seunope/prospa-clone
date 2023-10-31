import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#04093F"
      d="M5.087 7.475a.25.25 0 0 1-.25-.25V4.293a.25.25 0 0 1 .25-.25h.823a.25.25 0 0 1 .25.25v2.932l-.001.026a.25.25 0 0 1-.249.224h-.823ZM5.498 3.41a.654.654 0 0 1-.46-.178.56.56 0 0 1-.192-.426.56.56 0 0 1 .192-.427.654.654 0 0 1 .46-.177c.181 0 .334.059.46.177a.56.56 0 0 1 .192.427.56.56 0 0 1-.191.426.649.649 0 0 1-.46.178Z"
    />
    <Path
      fill="#04093F"
      fillRule="evenodd"
      d="M10.5 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM9.25 5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
