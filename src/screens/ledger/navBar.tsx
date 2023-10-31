import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import ArrowBack from "../../assets/ledger/back-arrow";
import InfoIcon from "../../assets/dashboard/others/info";
import { useNavigation } from "@react-navigation/core";

export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        {({ isPressed }) => {
          return (
            <View
              style={{
                backgroundColor: isPressed ? COLORS.white : COLORS.blueGray,
                borderRadius: 20,
                padding: 4,
              }}
            >
              <ArrowBack />
            </View>
          );
        }}
      </Pressable>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.textTitle}>Current Account</Text>
        <Text style={styles.textSubTitle}>7235636</Text>
      </View>
      <Text style={styles.textSupport}>Options</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  textTitle: {
    // paddingLeft: 10,
    // paddingRight: 5,
    fontSize: SIZES.lg,
    fontFamily: FONT.bold,
  },
  textSubTitle: {
    fontSize: SIZES.sm,
    color: COLORS.gray,
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
