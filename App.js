
import Reac, { useState } from "react";
import { Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";

const App = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry
        keyboardType="numeric"
        onChangeText={(text) => setFirstName(text)}
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        placeholder="First Name"
      />
    </Screen>
  );
};

export default App;
