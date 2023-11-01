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
      d="M19.73 12.058a.833.833 0 0 1 1.54 0l2.008 4.828 5.211.418a.833.833 0 0 1 .476 1.463l-3.97 3.401 1.212 5.086a.833.833 0 0 1-1.245.905L20.5 25.433l-4.462 2.726a.833.833 0 0 1-1.245-.905l1.214-5.086-3.971-3.401a.833.833 0 0 1 .475-1.463l5.212-.418 2.008-4.828Zm2.009 5.468c.24.577.782.971 1.405 1.021l3.215.258-2.45 2.098a1.667 1.667 0 0 0-.536 1.652l.748 3.137-2.752-1.681a1.667 1.667 0 0 0-1.737 0l-2.753 1.68.749-3.136a1.667 1.667 0 0 0-.537-1.652l-2.45-2.098 3.215-.258a1.667 1.667 0 0 0 1.406-1.021l1.238-2.978 1.239 2.978Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
