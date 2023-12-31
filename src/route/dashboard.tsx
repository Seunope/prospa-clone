import React from "react";
import { icons } from "../config/utils";
import Others from "../screens/other";
import Dashboard from "../screens/dashboard/dashboard";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type DashboardStackParams = {
  Dashboard: undefined;
  Beneficiary: undefined;
};

const AppTabs = createBottomTabNavigator<DashboardStackParams>();

const CustomHomeButtom = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -1,
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
    <icons.bottomNavBiz />
    {/* <Text
    // color={focused ? colors.blue[70] : colors.gray[100]}
    // top="-4"
    // textAlign="center"
    // fontSize="2xs"
    >
      Home
    </Text> */}
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
        name="Transaction"
        component={Others}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <icons.bottomNavTrans />,
        }}
      />
      <AppTabs.Screen
        name="Business"
        component={Dashboard}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: ({ focused }) => <CustomHomeText focused={focused} />,
          tabBarButton: (props) => <CustomHomeButtom {...props} />,
        }}
      />

      <AppTabs.Screen
        name="Invoice"
        component={Others}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <icons.bottomNavInvoice />,
        }}
      />

      <AppTabs.Screen
        name="Other"
        component={Others}
        options={{
          headerTitle: "",
          headerTransparent: true,
          tabBarIcon: () => <icons.bottomNavOthers />,
        }}
      />
    </AppTabs.Navigator>
  );
};
