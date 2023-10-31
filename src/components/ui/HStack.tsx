import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  space: number;
  p: string;
  alignItems: string;
  justifyContent: string;
  children: React.ReactNode;
}

const Center: React.FC<Props> = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Center;
