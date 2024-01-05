import React from "react";
import { Button } from "react-native";
import * as Notifications from "expo-notifications";

import Screen from "./app/components/Screen";

const App = () => {
  const showNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Congratulations",
        body: "Your order was successfully placed",
      },
      trigger: {
        seconds: 3,
      },
    });
  };

  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
  );
};

export default App;
