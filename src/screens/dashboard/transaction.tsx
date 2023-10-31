import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import ArrowDown from "../../assets/dashboard/others/arrow-down";
import TransactionIcon from "../../assets/dashboard/others/transaction";

export default () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text1}>Transactions</Text>
        <Text style={styles.textSupport}>View all</Text>
      </View>

      <View style={styles.containerTransaction}>
        <TransactionIcon />
        <View style={styles.containerTrans}>
          <View style={styles.containerTransTile}>
            <Text style={styles.textTile}>Transfer from Prospa</Text>
            <Text>- 1.33 USD</Text>
          </View>

          <Text style={styles.textSubTile}>Today, 8.40am</Text>
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
    backgroundColor: COLORS.blueGray,
  },
  containerTransTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding: 20,
    // borderRadius: 12,
    // backgroundColor: COLORS.blueGray,
  },
  containerTrans: {
    flex: 1,
    marginLeft: 10,
  },
  textTile: {
    fontFamily: FONT.medium,
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
    fontFamily: FONT.medium,
  },
  textSupport: {
    // padding: 0,
    color: COLORS.red,
    paddingRight: 5,
    fontSize: SIZES.sm,
    fontFamily: FONT.regular,
  },
});
