import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="#4CD964" opacity={0.1} rx={16} />
    <Path
      fill="#BCBCB7"
      fillRule="evenodd"
      d="M14.654 11.63h-.729a.914.914 0 0 1-.035-.217h.836c-.017.073-.04.145-.072.216Z"
      clipRule="evenodd"
    />
    <Path
      fill="#4CD964"
      fillRule="evenodd"
      d="M20.875 11.5h1.25c.69 0 1.25.56 1.25 1.25v1.875a2.5 2.5 0 0 1-2.5 2.5h-.421a4.38 4.38 0 0 1-3.329 2.456V21.5h1.25a.625.625 0 1 1 0 1.25h-3.75a.625.625 0 1 1 0-1.25h1.25v-1.92a4.38 4.38 0 0 1-3.329-2.455h-.421a2.5 2.5 0 0 1-2.5-2.5V12.75c0-.69.56-1.25 1.25-1.25h1.25v-.078c0-.647.525-1.172 1.172-1.172h6.406c.647 0 1.172.525 1.172 1.172v.078ZM16.5 18.375a3.125 3.125 0 0 1-3.125-3.125V11.5h6.25v3.75c0 1.726-1.4 3.125-3.125 3.125Zm4.33-2.5h.045c.69 0 1.25-.56 1.25-1.25V12.75h-1.25v2.5c0 .212-.015.42-.044.625Zm-8.66 0a4.412 4.412 0 0 1-.045-.625v-2.5h-1.25v1.875c0 .69.56 1.25 1.25 1.25h.044Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
