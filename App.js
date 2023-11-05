import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
          borderWidth: 10,
          borderColor: "royalblue",
          // borderRadius: 10,
          // borderTopWidth: 20,
          // borderTopLeftRadius: 50,

          // to create a cirlce, make sure that the border radius is atleast half the size of the view
          borderRadius: 50,
        }}
      ></View>
    </View>
  );
}
