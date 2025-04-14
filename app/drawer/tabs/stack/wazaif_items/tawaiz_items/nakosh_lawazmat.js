import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomBackground from "../../../../../../components/Background/Background";

export default function NotificationsScreen() {
  return (
    <CustomBackground>
      <View style={styles.container}>
        <Text style={styles.text}>nakosh_lawazmat</Text>
      </View>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
