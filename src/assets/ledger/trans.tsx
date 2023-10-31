import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} x={0.5} fill="#CDD5DD" rx={20} />
    <Path
      fill="#fff"
      d="M27.433 18.531a.94.94 0 0 0-.19-.99L22.87 13l-1.238 1.284 2.882 2.991H13.5v1.817h13.125a.851.851 0 0 0 .486-.153.902.902 0 0 0 .322-.408ZM13.567 21.47a.94.94 0 0 0 .19.99L18.13 27l1.238-1.284-2.882-2.991H27.5v-1.817H14.375a.851.851 0 0 0-.486.153.901.901 0 0 0-.322.408Z"
    />
  </Svg>
);
export default SvgComponent;
