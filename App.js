import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "gold",
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      />
    </View>
  );
}
