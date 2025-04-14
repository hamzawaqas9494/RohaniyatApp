import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

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
    fontSize: 30,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "right",
    marginBottom: 10,
  },

  description: {
    fontSize: 18,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
