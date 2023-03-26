import React from "react";
import { Image, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },

  container: {
    backgroundColor: "#000",
  },

  deleteIcon: {
    backgroundColor: "#4ecdc4",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});

export default ViewImageScreen;
