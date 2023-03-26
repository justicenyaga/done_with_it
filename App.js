import React from "react";
import {
  Button,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "Yes", onPress: console.log("Yes") },
            { text: "No", onPress: console.log("No") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
