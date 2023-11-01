import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import { LinearGradient } from "expo-linear-gradient";

export default () => {
  return (
    <>
      <Text style={styles.textTile}>Essentials</Text>

      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
          colors={[COLORS.red, COLORS.blue, COLORS.red]}
        >
          <View style={styles.containerReferral}>
            <Text style={styles.textReferralCount}>7</Text>
            <View style={styles.containerReferralText}>
              <Text style={styles.textReferral}>Customer</Text>
              <Text style={styles.textReferral}>Referral</Text>
            </View>
          </View>
          <Text style={styles.textEarn}>Refer & Earn</Text>
          <Text style={styles.textEarnAmount}>N10,000.00</Text>
          <Text style={styles.textEarnMessage}>
            Earn rewards for inviting businesses to Prospa
          </Text>
        </LinearGradient>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearGradient}
          colors={[COLORS.red, COLORS.blue, COLORS.red]}
        >
          <View style={styles.containerReferral}>
            <Text style={styles.textReferralCount}>7</Text>
            <View style={styles.containerReferralText}>
              <Text style={styles.textReferral}>Customer</Text>
              <Text style={styles.textReferral}>Referral</Text>
            </View>
          </View>
          <Text style={styles.textEarn}>Refer & Earn</Text>
          <Text style={styles.textEarnAmount}>N10,000.00</Text>
          <Text style={styles.textEarnMessage}>
            Earn rewards for inviting businesses to Prospa
          </Text>
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  containerReferral: {
    flexDirection: "row",
  },
  containerReferralText: {
    justifyContent: "center",
  },
  textTile: {
    marginTop: 30,
    marginBottom: 20,
    fontFamily: FONT.bold,
  },
  textReferralCount: {
    marginRight: 10,
    fontFamily: FONT.bold,
    fontSize: SIZES["2xl"],
    color: COLORS.white,
  },
  textReferral: {
    fontFamily: FONT.light,
    fontSize: SIZES["2xs"],
    color: COLORS.white,
  },
  textEarn: {
    marginTop: 20,
    color: COLORS.white,
    fontFamily: FONT.light,
    fontSize: SIZES.xs,
  },
  textEarnAmount: {
    paddingVertical: 5,
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.sm,
  },
  textEarnMessage: {
    paddingRight: 10,
    color: COLORS.white,
    fontFamily: FONT.light,
    fontSize: SIZES["2xs"],
  },
});
