import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Box } from "../../components/ui";
import { COLORS, FONT } from "../../config/utils/theme";
import AppContainer from "../../components/others/AppContainer";
import Header from "./header";
import Features from "./features";
import Funds from "./funds";
import Transaction from "./transaction";
import Points from "./points";
import Essential from "./essential";

export default () => {
  return (
    <AppContainer scrollAble={true}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        // hidden={false}
        barStyle="dark-content"
      />
      <View style={{ backgroundColor: COLORS.blueGray }}>
        <View style={styles.container1}>
          <Header />
          <Features />
          <Funds />
          <Transaction />
        </View>
        <View style={styles.container2}>
          <Points />
          <Essential />
        </View>
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 40,
  },
  container2: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
});
