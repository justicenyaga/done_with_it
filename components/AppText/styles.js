import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "yellowgreen",
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

export default styles;
