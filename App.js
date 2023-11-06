import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ListItem title="My Title" ImageComponent={<Icon name="email" />} />
      </Screen>
    </GestureHandlerRootView>
  );
};

export default App;
