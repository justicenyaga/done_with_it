import React from "react";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import { TextInput } from "react-native";

const App = () => {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
};

export default App;
