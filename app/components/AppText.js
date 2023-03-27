import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
        fontSize: 20,
      },

      android: {
        fontFamily: "Roboto",
        fontSize: 18,
      },
    }),
  },
});

export default AppText;
