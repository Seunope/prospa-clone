import * as React from "react";
import Svg, { SvgProps, Ellipse, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={38}
    fill="none"
    {...props}
  >
    <Ellipse cx={18.5} cy={19.201} fill="#CDD5DD" rx={18.5} ry={18.676} />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M21.25 15.555c0 1.61-1.231 2.916-2.75 2.916s-2.75-1.305-2.75-2.916c0-1.61 1.231-2.916 2.75-2.916s2.75 1.305 2.75 2.916Zm-1.375 0c0 .805-.616 1.458-1.375 1.458-.76 0-1.375-.653-1.375-1.458 0-.805.616-1.458 1.375-1.458.76 0 1.375.653 1.375 1.458ZM24 22.968a1.37 1.37 0 0 0-.288-.866c-1.26-1.553-3.128-2.537-5.212-2.537-2.084 0-3.951.984-5.212 2.537a1.37 1.37 0 0 0-.288.866v1.336c0 .806.616 1.459 1.375 1.459h8.25c.76 0 1.375-.653 1.375-1.459v-1.336Zm-1.375.03c-1.01-1.213-2.483-1.975-4.125-1.975s-3.115.762-4.125 1.975v1.306h8.25v-1.306Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
