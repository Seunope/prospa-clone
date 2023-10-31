import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={35}
    fill="none"
    {...props}
  >
    <Path
      fill="#8397AB"
      d="M28.929 7.926a1.007 1.007 0 0 0-.204-1.06L24.038 2l-1.326 1.376L25.8 6.581H14v1.946h14.062a.913.913 0 0 0 .521-.164.966.966 0 0 0 .346-.437ZM14.07 11.074a1.007 1.007 0 0 0 .204 1.06L18.962 17l1.326-1.376-3.087-3.205H29v-1.946H14.938a.913.913 0 0 0-.521.164.965.965 0 0 0-.346.437Z"
    />
  </Svg>
);
export default SvgComponent;
