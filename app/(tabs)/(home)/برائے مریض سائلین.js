import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
export default function BaraySaeleen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
        <Text style={styles.heading}>bray mrez saeleen</Text>

        </View>
      </ScrollView>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  subheading: {
    fontSize: 24,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
});

