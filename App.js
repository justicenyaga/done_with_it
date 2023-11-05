import React from "react";
import { View, Text } from "react-native";

import AppText from "./components/AppText";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText> I love react native! </AppText>
    </View>
  );
}
