import React from "react";
import { Image, Text, View } from "react-native";

const ViewImageScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          bottom: 50,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ backgroundColor: "tomato", left: 20, width: 40, height: 40 }}
        />
        <View
          style={{
            backgroundColor: "#75B3B5",
            right: 20,
            width: 40,
            height: 40,
          }}
        />
      </View>

      <Image
        source={require("../assets/chair.jpg")}
        style={{ width: "100%", height: "70%" }}
      />
    </View>
  );
};

export default ViewImageScreen;
