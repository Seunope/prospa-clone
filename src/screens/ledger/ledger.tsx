import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Box } from "../../components/ui";
import { COLORS, FONT } from "../../config/utils/theme";
import AppContainer from "../../components/others/AppContainer";
import NavBar from "./navBar";
import Amount from "./amount";
import Progress from "./progress";
import Transaction from "./transaction";

export default () => {
  return (
    <AppContainer scrollAble={true}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavBar />
      <Amount />
      <Progress />
      <Transaction />
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
