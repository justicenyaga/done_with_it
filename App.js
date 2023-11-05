import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",

          // IOS props to create a shadow
          shadowColor: "grey",
          shadowOffset: { height: 10, width: 10 },
          shadowOpacity: 1, // between 0 and 1
          shadowRadius: 10,

          //Android props to create a shadow - unfortunately doesn't really work well as the IOS shadow
          elevation: 10,
        }}
      ></View>
    </View>
  );
}
