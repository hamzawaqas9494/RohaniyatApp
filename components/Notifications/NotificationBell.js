import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useNotifications } from "./NotificationContext";

export default function NotificationBell({ onPress }) {
  const { unreadCount } = useNotifications();

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <FontAwesome name="bell" size={22} color="#6C472D" />

      {unreadCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{unreadCount}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    position: "relative",
  },

  badge: {
    position: "absolute",
    right: -8,
    top: -8,

    backgroundColor: "red",

    minWidth: 18,
    height: 18,

    borderRadius: 9,

    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});
