import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ListingsScreen from "./app/screens/ListingsScreen";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
};

export default App;
