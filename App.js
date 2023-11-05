import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";

const App = () => {
  return (
    <GestureHandlerRootView>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
};

export default App;
