import { StyleSheet, Text, View } from "react-native";
import CustomBackground from "../components/Background/Background";

export default function AboutUsScreen() {
  return (
    <CustomBackground>
      <View style={styles.container}>
        <Text style={styles.text}>ہماری پہچان</Text>
        <Text style={styles.text}>Coming soon</Text>
      </View>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {   fontSize: 18,
    color: "#6C472D",
    fontWeight: "600",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "center", },
});
