import { moderateScale } from "./scaling";
const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  light: "BRFirmaLight",
  regular: "BRFirmaRegular",
  medium: "BRFirmaMedium",
  bold: "BRFirmaBold",
};

const SIZES = {
  xs: moderateScale(10),
  sm: moderateScale(12),
  med: moderateScale(16),
  lg: moderateScale(20),
  xL: moderateScale(24),
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
