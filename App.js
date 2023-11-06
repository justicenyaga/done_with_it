import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AccountScreen from "./app/screens/AccountScreen";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AccountScreen />
    </GestureHandlerRootView>
  );
};

export default App;
