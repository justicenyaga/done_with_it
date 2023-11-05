import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="orange"
        onPress={
          () =>
            Alert.alert("My Title", "My message", [
              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No", onPress: () => console.log("No") },
            ])
          // Alert.prompt("My title", "My message", (text) => console.log(text)) // IOS Only
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
    // justifyContent: "center",
    // alignItems: "center",
  },
});
