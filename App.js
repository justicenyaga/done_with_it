import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Alert, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, myStyles]}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const myStyles = { backgroundColor: "dodgerblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
