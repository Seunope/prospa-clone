import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  space: number;
  p: string;
  children: React.ReactNode;
}

const Center: React.FC<Props> = (prop) => {
  return <View style={styles.container}>{prop.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Center;
