import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

const Screen = ({ children, style, disablePaddingTop = false }) => {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        style,
        { paddingTop: disablePaddingTop ? 0 : Constants.statusBarHeight },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
