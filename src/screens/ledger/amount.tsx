import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import EyeIcon from "../../assets/ledger/eye";
import InfoIcon from "../../assets/ledger/info";
import TransferIcon from "../../assets/ledger/trans";
import BookerIcon from "../../assets/ledger/bookkeeper";
import UpgradeIcon from "../../assets/ledger/upgrade";

import { useNavigation } from "@react-navigation/core";
import AppIntroSlider from "react-native-app-intro-slider";

export default () => {
  const navigation = useNavigation();

  const slides = [
    {
      key: 1,
      amount: "N5,000,000",
      text: "Available balance",
    },
    {
      key: 2,
      amount: "N4,500",
      text: "trans",
    },
    {
      key: 3,
      amount: "N3,500,000",
      text: "Testing",
    },
  ];

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.container}>
        <EyeIcon />
        <View style={{ alignItems: "center" }}>
          <View style={styles.containerAmount}>
            <Text style={styles.textTitle}>{item.amount}</Text>
            <InfoIcon />
          </View>
          <Text style={styles.textSubTitle}>Ledger balance</Text>
          <Text style={styles.textBalance}>N4,948,00.30</Text>
          <Text style={styles.textSubTitle}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const onDone = () => {};
  return (
    <>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showDoneButton={false}
        showNextButton={false}
        dotStyle={{ backgroundColor: "rgba(0, 0, 0, .2)", marginTop: 50 }}
        activeDotStyle={{
          backgroundColor: COLORS.red,
          marginTop: 50,
        }}
      />
      <View style={styles.containerFeature}>
        <View style={styles.containerFeatureItem}>
          <TransferIcon />
          <Text style={styles.textFeature}>Transfer</Text>
        </View>

        <View style={styles.containerFeatureItem}>
          <BookerIcon />
          <Text style={styles.textFeature}>Bookkeeper</Text>
        </View>
        <View style={styles.containerFeatureItem}>
          <UpgradeIcon />
          <Text style={styles.textFeature}>Upgrade</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 10,
    alignItems: "center",
    paddingBottom: 50,
  },

  containerAmount: {
    marginTop: 10,
    flexDirection: "row",
  },
  containerFeature: {
    flex: 1,
    marginTop: 10,
    // alignContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  containerFeatureItem: {
    padding: 20,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  textFeature: {
    marginTop: 7,
    fontSize: SIZES.xs,
    color: COLORS.gray2,
  },
  textTitle: {
    paddingRight: 5,
    fontSize: SIZES.lg,
    fontFamily: FONT.bold,
  },
  textSubTitle: {
    fontSize: SIZES.sm,
    color: COLORS.black2,
    fontFamily: FONT.medium,
  },
  textBalance: {
    marginTop: 20,
    color: COLORS.green,
    fontSize: SIZES.sm,
    fontFamily: FONT.bold,
  },
});
