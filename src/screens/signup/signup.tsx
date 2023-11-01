import React from "react";
import {
  Image,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LogoIcon from "../../assets/sign-up/logo";
import Example from "../../assets/sign-up/sample";
import MarckIcon from "../../assets/sign-up/mark";
import GoogleIcon from "../../assets/sign-up/google";
import { useNavigation } from "@react-navigation/core";
import { COLORS, FONT, SIZES } from "../../config/utils";
import { LinearGradient } from "expo-linear-gradient";

export default () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        hidden={true}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.containerTop}
          colors={[COLORS.red, COLORS.blue, COLORS.red]}
        >
          <View style={styles.containerLogo}>
            <LogoIcon />
            <Text style={{ color: COLORS.white }}>Sign in</Text>
          </View>
        </LinearGradient>

        <View style={styles.containerBottom}>
          <View style={styles.containerImage}>
            <Image source={require("../../assets/sign-up/sample.png")} />
          </View>
          <View style={{ marginHorizontal: SIZES["2xl"] }}>
            <View style={styles.containerView}>
              <MarckIcon />
              <Text style={styles.textDescription}>Business bank account</Text>
            </View>

            <View style={styles.containerView}>
              <MarckIcon />
              <Text style={styles.textDescription}>Up to N1M in loans</Text>
            </View>

            <View style={styles.containerView}>
              <MarckIcon />
              <Text style={styles.textDescription}>Send invoices</Text>
            </View>

            <View style={styles.containerView}>
              <MarckIcon />
              <Text style={styles.textDescription}>
                POS for office sale and more
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.buttonGPlusStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DashboardTab")}
          >
            <GoogleIcon />
            <Text style={styles.buttonTextStyle}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonEmail}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("DashboardTab")}
          >
            <Text style={styles.textEmail}>Continue with email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    flex: 1,
    padding: 20,
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
    borderBottomStartRadius: 40,
    // borderBottomLeftRadius: 20,
    // borderBottomEndRadius: 100,
    borderBottomRightRadius: 80,
    overflow: "hidden",
  },
  containerLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerBottom: {
    flex: 2,
    padding: 20,
    justifyContent: "flex-end",
    alignContent: "center",
  },
  containerImage: {
    position: "absolute",
    top: -200,
    left: 30,
    // bottom: 60,
  },
  textDescription: {
    paddingLeft: 10,
  },
  containerView: {
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonGPlusStyle: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.darkBlue,
    borderRadius: 7,
    margin: 5,
    padding: 5,
  },
  buttonEmail: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textEmail: {
    fontFamily: FONT.medium,
  },
  buttonTextStyle: {
    color: "#fff",
    padding: 5,
    marginBottom: 4,
    marginLeft: 10,
  },
});
