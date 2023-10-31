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
      fillRule="evenodd"
      d="M20.5 14.462a3.325 3.325 0 0 0-2.5-1.129h-4.583c-.92 0-1.667.746-1.667 1.667v10c0 .92.746 1.667 1.667 1.667H18c.63 0 1.18.35 1.463.867.22.404.577.8 1.037.8.46 0 .816-.396 1.037-.8A1.666 1.666 0 0 1 23 26.667h4.583c.92 0 1.667-.747 1.667-1.667V15c0-.92-.746-1.667-1.667-1.667H23c-.996 0-1.89.437-2.5 1.129ZM23 15c-.92 0-1.667.746-1.667 1.667v8.779A3.318 3.318 0 0 1 23 25h4.583V15H23Zm-5 10c.607 0 1.176.162 1.667.446v-8.78c0-.92-.747-1.666-1.667-1.666h-4.583v10H18Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
