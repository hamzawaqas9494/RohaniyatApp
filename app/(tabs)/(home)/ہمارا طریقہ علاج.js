import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../../components/Background/Background";
export default function HamaraTarikaIlajScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
        <Text style={styles.heading}>hmara trika ilaj</Text>

        </View>
      </ScrollView>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  subheading: {
    fontSize: 30,
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

