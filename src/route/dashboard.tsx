/* eslint-disable react-native/no-inline-styles */
import React from "react";
import Dashboard from "../screens/dashboard";
import { icons } from "../config/utils";
import { Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type DashboardStackParams = {
  // Home: undefined;
  // Refer: undefined;
  // Settings: undefined;
  Dashboard: undefined;
  Beneficiary: undefined;
};

const AppTabs = createBottomTabNavigator<DashboardStackParams>();

const CustomHomeButtom = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -15,
      marginLeft: 30,
      marginRight: 30,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View>{children}</View>
  </TouchableOpacity>
);

const CustomHomeText = (focused: boolean) => (
  <View
    style={{
      marginBottom: 2,
    }}
  >
    <icons.bottomNavHome />
    <Text
    // color={focused ? colors.blue[70] : colors.gray[100]}
    // top="-4"
    // textAlign="center"
    // fontSize="2xs"
    >
      Home
    </Text>
  </View>
);

export default () => {
  return (
    <AppTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarActiveTintColor: colors.blue[70],
        // tabBarInactiveTintColor: colors.gray[100],
      }}
    >
      <AppTabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <icons.bottomNavHome />,
        }}
      />

      <AppTabs.Screen
        name="Beneficiary"
        component={Dashboard}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <icons.bottomNavHome />,
        }}
      />

      {/* <AppTabs.Screen
        name="Home"
        component={Notification}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: ({ focused }) => <CustomHomeText focused={focused} />,
          tabBarButton: (props) => <CustomHomeButtom {...props} />,
        }}
      /> */}
      {/* <AppTabs.Screen
        name="Refer"
        component={Notification}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <ReferIcon />,
        }}
      />
      <AppTabs.Screen
        name="Settings"
        component={Notification}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <SettingsIcon />,
        }}
      /> */}
    </AppTabs.Navigator>
  );
};
