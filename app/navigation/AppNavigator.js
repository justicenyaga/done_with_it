import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from "./FeedNavigator";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Feeds" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
