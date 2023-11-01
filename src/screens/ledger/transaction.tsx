import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import TransBoxIcon from "../../assets/ledger/transbox";
import SearchIcon from "../../assets/ledger/search";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <SearchIcon />
        <TextInput
          style={{ flex: 1, marginLeft: 10 }}
          placeholder="Search"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.containerTransBox}>
        <Text style={{ color: COLORS.gray3, fontFamily: FONT.bold }}>
          11 December 2012
        </Text>
        <View style={styles.containerTransaction}>
          <TransBoxIcon />
          <View style={styles.containerTrans}>
            <View style={styles.containerTransTile}>
              <Text style={styles.textTile}>Transfer from Prospa</Text>
              <Text style={styles.textAmount}>+N200,000</Text>
            </View>

            <Text style={styles.textSubTile}>Today, 8.40am</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerTransBox}>
        <Text style={{ color: COLORS.gray3, fontFamily: FONT.bold }}>
          11 December 2021
        </Text>
        <View style={styles.containerTransaction}>
          <TransBoxIcon />
          <View style={styles.containerTrans}>
            <View style={styles.containerTransTile}>
              <Text style={styles.textTile}>Transfer from Ope</Text>
              <Text style={styles.textAmount}>-N10,000</Text>
            </View>

            <Text style={styles.textSubTile}>Today, 8.40am</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerTransBox}>
        {/* <Text>11 December 2012</Text> */}
        <View style={styles.containerTransaction}>
          <TransBoxIcon />
          <View style={styles.containerTrans}>
            <View style={styles.containerTransTile}>
              <Text style={styles.textTile}>Transfer from Prospa</Text>
              <Text style={styles.textAmount}>+N200,000</Text>
            </View>

            <Text style={styles.textSubTile}>Today, 8.40am</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.grayLight,
    borderColor: COLORS.white,
    height: 40,
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  containerTransBox: {
    padding: 10,
  },
  containerTransaction: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
  containerTransTile: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerTrans: {
    flex: 1,
    marginLeft: 10,
  },
  textTile: {
    fontFamily: FONT.bold,
  },
  textSubTile: {
    fontFamily: FONT.regular,
    fontSize: SIZES.sm,
    color: COLORS.gray2,
  },
  textAmount: {
    color: COLORS.gray2,
    fontFamily: FONT.bold,
  },

  textDate: {
    color: COLORS.gray3,
    fontFamily: FONT.bold,
  },
});
