import * as React from "react";
import * as Font from "expo-font";
import "react-native-gesture-handler";
import { useState, useEffect } from "react";
import RootNavigation from "./src/route/root";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  let customFonts = {
    BRFirmaBold: require("./src/assets/fonts/BRFirmaBold.otf"),
    BRFirmaLight: require("./src/assets/fonts/BRFirmaLight.otf"),
    BRFirmaMedium: require("./src/assets/fonts/BRFirmaMedium.otf"),
    BRFirmaRegular: require("./src/assets/fonts/BRFirmaRegular.otf"),
  };

  useEffect(() => {
    Font.loadAsync(customFonts).then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
