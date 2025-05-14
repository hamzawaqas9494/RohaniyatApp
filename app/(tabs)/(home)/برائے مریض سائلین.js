import { StyleSheet, Text, View } from "react-native";
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>برائے مریض / سائلین</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#000",
  },
});
