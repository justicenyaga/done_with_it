import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
      gestureEnabled: true,
      headerShown: false,
      ...TransitionPresets.ModalSlideFromBottomIOS,
    }}
  >
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
