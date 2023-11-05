import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";

export default function App() {
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");

  console.log("Screen", screen);
  console.log("Window", window);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: 180, height: 70, backgroundColor: "dodgerblue" }} />
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
