import React from "react";
import { Button, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
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
const TweetDetails = () => (
  <Screen>
    <Text>TweetDetails</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    {/* if the initialRouteName is not provided.. renders the first screen as the initialRoute */}
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

const App = (props) => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
