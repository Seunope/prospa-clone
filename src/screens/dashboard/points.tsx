import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import ArrowDown from "../../assets/dashboard/others/arrow-down";
import TrophyIcon from "../../assets/dashboard/others/trophy";
import LevelIcon from "../../assets/dashboard/others/level";

export default () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text1}>Your points</Text>
        <Text style={styles.textSupport}>View all</Text>
      </View>

      <View style={styles.containerTransaction}>
        <TrophyIcon />
        <View style={styles.containerTrans}>
          <View>
            <Text style={styles.textTile}>625,856</Text>
            <Text style={styles.textSubTile}>Points Balance</Text>
          </View>
          <LevelIcon />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTransaction: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.green,
    backgroundColor: COLORS.white,
  },

  containerTrans: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTile: {
    fontFamily: FONT.bold,
  },
  textSubTile: {
    fontFamily: FONT.regular,
    fontSize: SIZES.sm,
    color: COLORS.gray,
  },

  text1: {
    paddingLeft: 10,
    paddingRight: 5,
    color: COLORS.black2,
    fontFamily: FONT.bold,
  },
  textSupport: {
    // padding: 0,
    color: COLORS.red,
    paddingRight: 5,
    fontSize: SIZES.sm,
    fontFamily: FONT.regular,
  },
});
