import React from "react";
import Header from "./header";
import Funds from "./funds";
import Points from "./points";
import Features from "./features";
import Essential from "./essential";
import Transaction from "./transaction";
import { COLORS, FONT } from "../../config/utils/theme";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import AppContainer from "../../components/others/AppContainer";

export default () => {
  return (
    <AppContainer scrollAble={true}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={false}
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
