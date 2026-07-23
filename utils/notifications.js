import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export async function registerNotification() {
  try {
    // Web disable
    if (Platform.OS === "web") {
      console.log("Web notification disabled");
      return null;
    }

    // Real device only
    if (!Device.isDevice) {
      console.log("Real device required");
      return null;
    }

    // Permission
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();

      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      console.log("Notification permission denied");
      return null;
    }

    // Android / iOS Native FCM Token
    const token = await Notifications.getDevicePushTokenAsync();

    console.log("FCM TOKEN:", token.data);

    return token.data;
  } catch (error) {
    console.log("FCM TOKEN ERROR:", error?.message || error);

    return null;
  }
}
