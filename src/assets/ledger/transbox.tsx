import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#F5F5F7" rx={20} />
    <Path
      fill="#82849F"
      fillRule="evenodd"
      d="M12 21.143 18.918 28H12v-6.857ZM27.997 21v6.857H21.08V21h6.918Zm-3.457-9c1.91 0 3.46 1.536 3.46 3.43 0 1.894-1.55 3.43-3.46 3.43-1.911 0-3.46-1.536-3.46-3.43 0-1.894 1.549-3.43 3.46-3.43Zm-5.622 0v6.857H12V12h6.918Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
