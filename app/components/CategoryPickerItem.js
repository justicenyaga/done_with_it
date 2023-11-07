import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "./Icon";
import Text from "./Text";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "33%",
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
