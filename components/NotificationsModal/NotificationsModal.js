import { useEffect, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NotificationsModal({ deviceId, visible, onClose }) {




console.log(deviceId, visible, onClose,"deviceId, visible, onClose notification modal")

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (visible) fetchNotifications();
  }, [visible]);

  const fetchNotifications = async () => {
    try {
      const res = await fetch(`https://rohanishop.net/api/get-notifications?deviceId=${deviceId}`);
      const data = await res.json();
      setNotifications(data);
    } catch (err) {
      console.error(err);
    }
  };

  const markAsRead = async (id) => {
    try {
      await fetch('https://rohanishop.net/api/read-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notificationId: id }),
      });
      // UI update
      setNotifications((prev) => prev.filter(n => n.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Notifications</Text>
          <ScrollView>
            {notifications.length === 0 ? (
              <Text>No new notifications</Text>
            ) : (
              notifications.map(n => (
                <TouchableOpacity key={n.id} onPress={() => markAsRead(n.id)} style={styles.notification}>
                  <Text style={styles.notificationTitle}>{n.title}</Text>
                  <Text>{n.message}</Text>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={{color:'white'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex:1, backgroundColor:'rgba(0,0,0,0.5)', justifyContent:'center', alignItems:'center' },
  container: { width:'90%', backgroundColor:'white', borderRadius:10, padding:15, maxHeight:'80%' },
  title: { fontSize:18, fontWeight:'bold', marginBottom:10 },
  notification: { padding:10, borderBottomWidth:1, borderBottomColor:'#ddd' },
  notificationTitle: { fontWeight:'bold' },
  closeBtn: { marginTop:10, backgroundColor:'#6C472D', padding:10, borderRadius:5, alignItems:'center' }
});
