import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/justice.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/justice.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
