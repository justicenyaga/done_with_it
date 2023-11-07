import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan sapien ac metus malesuada vulputate. Mauris aliquet ipsum enim, a volutpat quam gravida vel. Phasellus quis est ut enim aliquam dictum ut eu felis. Sed sed ex a augue efficitur dictum laoreet scelerisque diam. Suspendisse vel lorem tempus, varius tortor non, semper purus. Suspendisse id dui feugiat, tristique dolor ac, maximus velit. Duis vestibulum maximus mi eget egestas.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan sapien ac metus malesuada vulputate. Mauris aliquet ipsum enim, a volutpat quam gravida vel. Phasellus quis est ut enim aliquam dictum ut eu felis. Sed sed ex a augue efficitur dictum laoreet scelerisque diam. Suspendisse vel lorem tempus, varius tortor non, semper purus. Suspendisse id dui feugiat, tristique dolor ac, maximus velit. Duis vestibulum maximus mi eget egestas.",
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/justice.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
