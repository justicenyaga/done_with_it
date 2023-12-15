import React from "react";
import { Image, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/background.jpg")}
        style={{ width: "100%", height: "85%" }}
      />
      <View
        style={{
          position: "absolute",
          width: "50%",
          alignItems: "center",
          top: 80,
        }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={{ width: 100, height: 100 }}
        />

        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={{ backgroundColor: "tomato", width: "100%", flex: 1 }} />
      <View style={{ backgroundColor: "#75B3B5", width: "100%", flex: 1 }} />
    </View>
  );
};

export default WelcomeScreen;
