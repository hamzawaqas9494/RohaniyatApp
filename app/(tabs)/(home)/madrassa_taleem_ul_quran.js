import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../components/Background/Background";

export default function RohaniIlajScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>روحانی علاج</Text>
          <Text style={styles.description}>
            روحانی علاج ایک اسلامی طریقہ ہے جو قرآنی آیات، دعاؤں اور ذکر کے
            ذریعے بیماریوں اور مسائل کا حل پیش کرتا ہے۔
          </Text>
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
  description: {
    fontSize: 20,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
});
