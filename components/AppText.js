import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 18,
      },
      android: {
        fontFamily: "Roboto",
        fontSize: 20,
      },
    }),
  },
});

export default AppText;
