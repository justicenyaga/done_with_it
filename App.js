import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1, // fill all the available space
        flexDirection: "row", // define the main axis
        justifyContent: "center", // align along the main (Primary) axis
        alignItems: "center", // align along the secondary axis
      }}
    >
      <View
        style={{
          width: 100,
          height: 200,
          backgroundColor: "dodgerblue",
          alignSelf: "flex-start", // aligning individual items along the secondary axis
        }}
      />
      <View
        style={{
          width: 100,
          height: 150,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
}
