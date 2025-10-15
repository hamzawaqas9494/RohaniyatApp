import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NotificationBell({ deviceId: deviceIdProp, onPress }) {


console.log( deviceIdProp, onPress," deviceId, onPress notification bell")


  const [count, setCount] = useState(0);
  const [deviceId, setDeviceId] = useState(deviceIdProp || null);

  useEffect(() => {
    // Resolve deviceId from prop or SecureStore
    if (!deviceIdProp) {
      SecureStore.getItemAsync('deviceId').then((val) => {
        if (val) setDeviceId(val);
      });
    } else {
      setDeviceId(deviceIdProp);
    }
  }, [deviceIdProp]);

  useEffect(() => {
    // Dashboard load hone par fetch karo
    const fetchNotifications = async () => {
      try {
        if (!deviceId) return;
        const res = await fetch(`https://rohanishop.net/api/get-notifications?deviceId=${deviceId}`);
        const data = await res.json();
        setCount(data.length);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNotifications();
  }, [deviceId]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.bell}>🔔</Text>
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { position: 'relative', marginRight: 10 },
  bell: { fontSize: 25 },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: { color: 'white', fontSize: 12 },
});
