import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const App = () => {
  const demo = async () => {
    await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
    const value = await AsyncStorage.getItem("person");
    const person = JSON.parse(value);
    console.log("demo result: ", person);
  };

  demo();

  // Get all items stored in AsyncStorage
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({ [store[i][0]]: JSON.parse(store[i][1]) });
        return true;
      });
    });
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
