import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
  },

  logo: {
    width: 100,
    height: 100,
  },

  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },

  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
