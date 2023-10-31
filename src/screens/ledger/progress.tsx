import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../config/utils";
import ArrowBack from "../../assets/ledger/back-arrow";
import InfoIcon from "../../assets/dashboard/others/info";
import { useNavigation } from "@react-navigation/core";
import * as Progress from "react-native-progress";

export default () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerTitle}>
          <Text>Money in</Text>
          <Text style={styles.textAmount}>N20,000</Text>
        </View>
        <View style={styles.containerProgress}>
          <Progress.Bar
            progress={0.3}
            width={null}
            color={COLORS.purple}
            borderColor={COLORS.white}
            unfilledColor={COLORS.grayLight}
          />
        </View>
      </View>

      <View style={{ marginTop: 5 }}>
        <View style={styles.containerTitle}>
          <Text>Money out</Text>
          <Text style={styles.textAmount}>N20,000</Text>
        </View>
        <View style={styles.containerProgress}>
          <Progress.Bar
            progress={0.8}
            width={null}
            color={COLORS.lightRed}
            borderColor={COLORS.white}
            unfilledColor={COLORS.grayLight}
          />
        </View>
      </View>

      <View style={{ marginTop: 5 }}>
        <View style={styles.containerTitle}>
          <Text>Wallet balance</Text>
          <Text style={styles.textAmount}>N20,000</Text>
        </View>
        <View style={styles.containerProgress}>
          <Progress.Bar
            progress={0.4}
            width={null}
            color={COLORS.gray2}
            borderColor={COLORS.white}
            unfilledColor={COLORS.grayLight}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  containerTitle: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerProgress: {
    flex: 1,
    padding: 10,
  },
  textAmount: {
    fontFamily: FONT.bold,
    fontSize: SIZES.sm,
  },
});
