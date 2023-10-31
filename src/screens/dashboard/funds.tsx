import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";

export default () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text
            style={styles.textAmount}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            ₦22,250,000
          </Text>
          <Text style={styles.textAmountDecimal}>.98</Text>
        </View>

        <Text style={styles.textAccount}>View accounts</Text>
      </View>
      <Text style={styles.textAvailableBalance}>Available balance</Text>

      <View style={styles.containerButton}>
        <TouchableOpacity activeOpacity={0.4} style={styles.button}>
          <Text style={styles.text}>Transfer funds</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={[styles.button, { backgroundColor: COLORS.blueGray }]}
        >
          <Text style={[styles.text, { color: COLORS.black3 }]}>
            Share account
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  container2: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  containerButton: {
    marginVertical: 30,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textAmount: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xl,
  },
  textAmountDecimal: {
    marginBottom: 5,
    color: COLORS.gray,
    fontFamily: FONT.medium,
    fontSize: SIZES.sm,
  },
  textAccount: {
    color: COLORS.red,
    fontFamily: FONT.light,
    fontSize: SIZES.sm,
  },
  textAvailableBalance: {
    color: COLORS.gray,
    paddingLeft: 5,
    fontSize: SIZES.xs,
  },

  button: {
    // alignItems: "center",
    // justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    paddingHorizontal: SIZES["2xl"],
    // elevation: 3,
    backgroundColor: COLORS.lightRed,
  },

  text: {
    borderRadius: 8,
    fontSize: SIZES.sm,
    lineHeight: SIZES.md,
    letterSpacing: 0.25,
    color: COLORS.red,
  },
});
