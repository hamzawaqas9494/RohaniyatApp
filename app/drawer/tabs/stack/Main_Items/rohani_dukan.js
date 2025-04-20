import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function AmliyatCourseScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}> روحانی دکان </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    lineHeight: 50,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    fontFamily: "NotoNastaliqUrdu-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
});
