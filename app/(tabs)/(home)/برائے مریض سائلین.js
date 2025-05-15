import { StyleSheet, Text, View } from "react-native";
export default function BaraySaeleen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>برائے مریض / سائلین</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    fontWeight: "600",
    textAlign: "center",
  },
 card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 2,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 22,
   fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
