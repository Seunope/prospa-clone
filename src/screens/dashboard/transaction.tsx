import React from "react";
import { useNavigation } from "@react-navigation/core";
import TransactionIcon from "../../assets/ledger/trans";
import { COLORS, FONT, SIZES } from "../../config/utils";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default () => {
  const navigation = useNavigation<any>();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text1}>Transactions</Text>
        <Text style={styles.textSupport}>View all</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.containerTransaction}
        onPress={() => navigation.navigate("Ledger")}
      >
        <TransactionIcon />
        <View style={styles.containerTrans}>
          <View style={styles.containerTransTile}>
            <Text style={styles.textTile}>Transfer from Prospa</Text>
            <Text>- 1.33 USD</Text>
          </View>

          <Text style={styles.textSubTile}>Today, 8.40am</Text>
        </View>
      </TouchableOpacity>
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
