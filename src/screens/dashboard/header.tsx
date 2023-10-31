import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import ArrowDown from "../../assets/dashboard/others/arrow-down";
import InfoIcon from "../../assets/dashboard/others/info";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <icons.profile />
        <View style={styles.container2}>
          <Text style={styles.text1}>DailyBread LTD</Text>
        </View>
        <ArrowDown />
      </View>
      <View style={styles.container3}>
        <Text style={styles.textSupport}>Support</Text>
        <InfoIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  container2: {
    flexDirection: "row",
    alignItems: "center",
  },

  container3: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightRed,
  },

  text1: {
    paddingLeft: 10,
    paddingRight: 5,
    fontFamily: FONT.regular,
  },
  textSupport: {
    // padding: 0,
    color: COLORS.red,
    paddingRight: 5,
    fontSize: SIZES.sm,
    fontFamily: FONT.regular,
  },
});
