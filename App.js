import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          // fontFamily: "Roboto", // Roboto is supported on Android only
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          // textDecorationLine: "line-through",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love React Native! This is my first React Native app! Here's some more
        text
      </Text>
    </View>
  );
}
