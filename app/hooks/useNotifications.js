import { useEffect } from "react";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default useNotifications = (
  notificationReceivedListener,
  notificationResponseReceivedListener
) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationReceivedListener)
      Notifications.addNotificationReceivedListener(
        notificationReceivedListener
      );

    if (notificationResponseReceivedListener)
      Notifications.addNotificationResponseReceivedListener(
        notificationResponseReceivedListener
      );
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { granted } = await Notifications.requestPermissionsAsync();
      if (!granted) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.easConfig.projectId,
      });

      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
