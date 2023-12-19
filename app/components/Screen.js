import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";

const Screen = ({ children, style, usePadding = true }) => {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        style,
        { paddingTop: usePadding ? Constants.statusBarHeight : 0 },
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
