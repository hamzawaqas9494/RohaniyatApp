// components/PushTokenManager.js
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export default function PushTokenManager() {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  async function registerForPushNotificationsAsync() {
    console.log("🚀 Registering device for push notifications...");

    // 1️⃣ Request notification permissions
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.warn("❌ Permission not granted");
      return;
    }

    // 2️⃣ Web: unsubscribe old push subscription if exists
    if (Platform.OS === 'web' && 'serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          const subscription = await registration.pushManager.getSubscription();
          if (subscription) {
            await subscription.unsubscribe();
            console.log("✅ Old Web subscription removed");
          }
        }
      } catch (err) {
        console.warn("⚠️ Error unsubscribing old Web subscription:", err);
      }
    }

    // 3️⃣ Generate Expo push token
    let token;
    const projectId = Constants.expoConfig?.extra?.eas?.projectId || "bdd14ab6-f4c0-4dde-82de-02d84a53403e";
    const applicationId = projectId; // Web requires applicationId

    try {
      const tokenResponse = await Notifications.getExpoPushTokenAsync({ projectId, applicationId });
      token = tokenResponse.data;

      if (Platform.OS === 'web') {
        console.log("🌐 Web Expo Push Token:", token);
      } else {
        console.log("📱 Mobile Expo Push Token:", token);
      }
    } catch (err) {
      console.error("❌ Error generating push token:", err);
      return;
    }

    // 4️⃣ Generate unique device ID
    const deviceId = uuidv4();

    // 5️⃣ Send token to backend
    const backendURL = "https://rohanishop.net/api/token";
    try {
      const res = await fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, deviceId, platform: Platform.OS }),
      });
      console.log("📡 Token saved successfully:", await res.json());
    } catch (err) {
      console.error("❌ Error sending token:", err);
    }

    // 6️⃣ Android notification channel
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  }

  return null;
}
