import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: orientation === "portrait" ? "30%" : "100%",
          backgroundColor: "dodgerblue",
        }}
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
