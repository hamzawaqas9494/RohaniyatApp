import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👤 Profile Screen</Text>
            <Text style={styles.text}>یہ  ٹیکسٹ ہے</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold", fontFamily: "NotoNastaliqUrdu-Regular", },
});
