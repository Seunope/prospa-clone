import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Box } from "./src/components/ui";

export default function App() {
  return (
    <Box>
      <Text>sdsdsdsdsdsdstart working on your app!</Text>
    </Box>
    // <View style={styles.container}>
    //   <Text>Open up App.js to ssddadadtart working on your app!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
