import React from "react";
import { Text } from "react-native";
import { Box } from "../components/ui";
import { FONT } from "../config/utils/theme";

export default () => {
  return (
    <Box>
      <Text style={{ fontFamily: FONT.bold, fontSize: 40 }}>
        Dashboard screen
      </Text>
    </Box>
  );
};
