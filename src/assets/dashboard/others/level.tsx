import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={16} cy={16} r={16} fill="#F4F8FB" />
    <Path
      fill="#8397AB"
      d="M12.917 17.79h3.2v1.61h-4.94v-7h1.74v5.39Zm6.377.05h2.69v1.56h-5.21v-1.26l2.47-2.31c.72-.67.95-1.02.95-1.37 0-.39-.29-.64-.74-.64-.55 0-1.06.36-1.42 1.08l-1.36-.81c.47-1.16 1.48-1.83 2.77-1.83 1.5 0 2.48.91 2.48 2.11 0 .72-.33 1.32-1.09 2.03l-1.54 1.44Z"
    />
  </Svg>
);
export default SvgComponent;
