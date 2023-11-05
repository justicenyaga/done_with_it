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
        flexWrap: "wrap", // prevents shrinking when items overflow on the main axis

        // when wrapping is enables, alignitems behaves different - determines the alignment of items on each lines
        // to aling items along the secondary axis of the entire content, we use alignContent

        alignContent: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 300,
          backgroundColor: "dodgerblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
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
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "grey",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "greenyellow",
        }}
      />
    </View>
  );
}
