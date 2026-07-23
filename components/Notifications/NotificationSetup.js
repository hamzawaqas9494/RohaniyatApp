import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

import { registerNotification } from "../../utils/notifications";

export default function NotificationSetup() {
  useEffect(() => {
    async function setupNotification() {
      const token = await registerNotification();

      if (!token) {
        console.log("No notification token");

        return;
      }

      console.log("ANDROID FCM TOKEN:", token);

      // Mobile storage mein save
      await AsyncStorage.setItem("notification_token", token);

      console.log("TOKEN SAVED STORAGE:", token);

      try {
        await fetch(
          "http://192.168.18.167:3000/api/notifications/push-tokens",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              token,

              platform: "android",

              device_info: {
                device: "Android",
                app: "Idara Rohaniyat",
              },
            }),
          },
        );

        console.log("Token saved backend");
      } catch (error) {
        console.log("Token save error:", error);
      }
    }

    setupNotification();
  }, []);

  return null;
}
