import React from "react";
import { Text, StyleSheet } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontFamily: "Avenir",
    fontSize: 20,
  },
});

export default AppText;
