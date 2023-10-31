import React from "react";
import DashboardTab from "./dashboard";
import SignUp from "../screens/signup";
import Ledger from "../screens/ledger";
import { createStackNavigator } from "@react-navigation/stack";
import { AppStateProvider } from "../config/utils/context/app_state";

type RootStackParamList = {
  Ledger: undefined;
  SignUp: undefined;
  DashboardTab: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName="DashboardTab">
      <RootStack.Screen
        name="DashboardTab"
        component={DashboardTab}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Ledger"
        component={Ledger}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <AppStateProvider>
      <RootStackScreen />
    </AppStateProvider>
  );
};
