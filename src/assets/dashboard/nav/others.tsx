import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#8397AB"
      fillRule="evenodd"
      d="M0 1.667C0 .747.746 0 1.667 0H5c.92 0 1.667.746 1.667 1.667V5c0 .92-.747 1.667-1.667 1.667H1.667C.747 6.667 0 5.92 0 5V1.667Zm1.667 0H5V5H1.667V1.667ZM1.667 8.333C.747 8.333 0 9.08 0 10v3.333C0 14.253.746 15 1.667 15H5c.92 0 1.667-.746 1.667-1.667V10c0-.92-.747-1.667-1.667-1.667H1.667Zm0 1.667H5v3.333H1.667V10ZM10 0c-.92 0-1.667.746-1.667 1.667V5c0 .92.747 1.667 1.667 1.667h3.333C14.253 6.667 15 5.92 15 5V1.667C15 .747 14.254 0 13.333 0H10Zm0 1.667h3.333V5H10V1.667Z"
      clipRule="evenodd"
    />
    <Path
      fill="#8397AB"
      d="M11.667 15a.833.833 0 0 1-.834-.833V12.5H9.167a.833.833 0 1 1 0-1.667h1.666V9.167a.833.833 0 0 1 1.667 0v1.666h1.667a.833.833 0 0 1 0 1.667H12.5v1.667c0 .46-.373.833-.833.833Z"
    />
  </Svg>
);
export default SvgComponent;
