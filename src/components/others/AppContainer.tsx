import React, { Children, useEffect } from "react";
import { RefreshControl, StyleSheet, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { COLORS } from "../../config/utils";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  scrollAble?: boolean;
  color?: string;
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <SafeAreaView
      style={styles.safeAreaViewContainer}
      forceInset={{ top: "always" }}
    >
      {props.scrollAble ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[styles.screenContainer, { backgroundColor: props.color }]}
          >
            {props.children}
          </View>
        </ScrollView>
      ) : (
        <View
          style={[styles.screenContainer, { backgroundColor: props.color }]}
        >
          {props.children}
        </View>
      )}
    </SafeAreaView>
  );
};
export default AppContainer;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    minWidth: "100%",
    minHeight: "100%",
    backgroundColor: COLORS.white,
    // justifyContent: "center",
    // alignItems: "center",
  },
  screenContainer: {
    height: "100%",
    width: "100%",
    // paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
