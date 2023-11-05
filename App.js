import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        React Native is fun - This is a really really long text. I wanna make
        this even longer and see what happens
      </Text>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
