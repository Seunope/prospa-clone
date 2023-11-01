import { moderateScale } from "./scaling";
const COLORS = {
  red: "#FA4A84",
  lightRed: "#FEC9DB",
  // primary: "#312651",
  // secondary: "#444262",
  // tertiary: "#FF7754",

  gray: "#83829A",
  blueGray: "#F7F9FC",
  gray2: "#8397AB",
  gray3: "#82849F",
  grayLight: "#F5F5F7",

  black: "#1C1335",
  black2: "#2E3A59",
  black3: "#1C1335",
  // gray2: "#C1C0C8",

  green: "#4CD964",

  white: "#FFFFFF",
  blue: "#7E51FF",
  darkBlue: "#1C003B",

  purple: "rgba(126, 81, 255, 0.3)",
};

const FONT = {
  light: "BRFirmaLight",
  regular: "BRFirmaRegular",
  medium: "BRFirmaMedium",
  bold: "BRFirmaBold",
};

const SIZES = {
  "2xs": moderateScale(7),
  xs: moderateScale(10),
  sm: moderateScale(12),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(24),
  "2xl": moderateScale(32),
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
