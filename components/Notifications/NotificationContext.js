// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createContext, useContext, useEffect, useState } from "react";

// const NotificationContext = createContext();

// export function NotificationProvider({ children }) {
//   const [notifications, setNotifications] = useState([]);

//   const [unreadCount, setUnreadCount] = useState(0);

//   // Notifications list aur unread counter load karna
//   const loadNotifications = async () => {
//     try {
//       // Mobile se saved FCM token lena
//       const token = await AsyncStorage.getItem("notification_token");

//       console.log("LOAD TOKEN:", token);

//       if (!token) {
//         console.log("Notification token not found");

//         return;
//       }

//       // Backend se notifications fetch karna
//       const response = await fetch(
//         `http://192.168.18.167:3000/api/notifications/notifications-list?token=${token}`,
//       );

//       console.log("API STATUS:", response.status);

//       const data = await response.json();

//       console.log("NOTIFICATION DATA:", data);

//       if (data.success) {
//         // Notification list save
//         setNotifications(data.notifications);

//         // Bell counter update
//         setUnreadCount(data.unreadCount);

//         console.log("Unread Count:", data.unreadCount);
//       }
//     } catch (error) {
//       console.log("Load notification error:", error);
//     }
//   };

//   // Notification ko read mark karna
//   const markAsRead = async (notificationId) => {
//     try {
//       // Saved token lena
//       const token = await AsyncStorage.getItem("notification_token");

//       console.log("MARK READ TOKEN:", token);

//       if (!token) return;

//       // Backend read API call
//       const response = await fetch(
//         "http://192.168.18.167:3000/api/notifications/notification_reads",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify({
//             token,

//             notification_id: notificationId,
//           }),
//         },
//       );

//       console.log("MARK READ STATUS:", response.status);

//       // Counter refresh karna
//       loadNotifications();
//     } catch (error) {
//       console.log("Mark read error:", error);
//     }
//   };

//   useEffect(() => {
//     console.log("Notification Provider Mounted");

//     // App start par ek dafa notifications load hongi
//     loadNotifications();
//   }, []);

//   return (
//     <NotificationContext.Provider
//       value={{
//         // Saari notifications
//         notifications,

//         // Bell ka unread counter
//         unreadCount,

//         // Manual refresh ke liye
//         loadNotifications,

//         // Read karne ke liye
//         markAsRead,
//       }}
//     >
//       {children}
//     </NotificationContext.Provider>
//   );
// }

// export function useNotifications() {
//   const context = useContext(NotificationContext);

//   if (!context) {
//     throw new Error(
//       "useNotifications must be used inside NotificationProvider",
//     );
//   }

//   return context;
// }

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const [unreadCount, setUnreadCount] = useState(0);

  // Notifications list aur unread counter load karna
  // filter:
  // all
  // today
  // yesterday
  // 7days
  // 30days

  const loadNotifications = async (filter = "all") => {
    try {
      // Mobile se saved FCM token lena
      const token = await AsyncStorage.getItem("notification_token");

      console.log("LOAD TOKEN:", token);

      if (!token) {
        console.log("Notification token not found");

        return;
      }

      // Backend se filtered notifications fetch karna

      const response = await fetch(
        `http://192.168.18.167:3000/api/notifications/notifications-list?token=${token}&filter=${filter}`,
      );

      console.log("API STATUS:", response.status);

      const data = await response.json();

      console.log("NOTIFICATION DATA:", data);

      if (data.success) {
        // Notification list save

        setNotifications(data.notifications);

        // Bell counter update

        setUnreadCount(data.unreadCount);

        console.log("Current Filter:", filter);

        console.log("Unread Count:", data.unreadCount);
      }
    } catch (error) {
      console.log("Load notification error:", error);
    }
  };

  // Notification ko read mark karna

  const markAsRead = async (notificationId) => {
    try {
      // Saved token lena

      const token = await AsyncStorage.getItem("notification_token");

      console.log("MARK READ TOKEN:", token);

      if (!token) return;

      // Backend read API call

      const response = await fetch(
        "http://192.168.18.167:3000/api/notifications/notification_reads",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            token,

            notification_id: notificationId,
          }),
        },
      );

      console.log("MARK READ STATUS:", response.status);

      // Counter update

      loadNotifications();
    } catch (error) {
      console.log("Mark read error:", error);
    }
  };

  useEffect(() => {
    console.log("Notification Provider Mounted");

    // App start par sari notifications load hongi

    loadNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        // Current notifications list

        notifications,

        // Bell unread counter

        unreadCount,

        // Filter ke sath reload

        loadNotifications,

        // Read mark karna

        markAsRead,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotifications must be used inside NotificationProvider",
    );
  }

  return context;
}
