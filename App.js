import React from "react";
import { Button, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })} // Add the second parameter to pass parameters to the route
    />
  );
};

const Tweets = ({ navigation }) => (
  // navigation prop works only on Screen elements... it's not passed down to children elements
  // To navigate to different screen/routes, use the navigation hook in "@react-navigation/native" module

  <Screen>
    <Text>Tweets</Text>
    {/* <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails")}
    /> */}
    <Link />
  </Screen>
);
const TweetDetails = ({ route }) => (
  // route prop works on Screen elements. use the route hook to use it on child components

  <Screen>
    <Text>TweetDetails {route.params.id}</Text>
  </Screen>
);

const Accounts = () => (
  <Screen>
    <Text>Accounts</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const FeedsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    {/* if the initialRouteName is not provided.. renders the first screen as the initialRoute */}
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: `Tweet ${route.params.id} Details` })}
    />
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "lightgrey",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feeds"
      component={FeedsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Accounts" component={Accounts} />
  </Tab.Navigator>
);

const App = (props) => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
