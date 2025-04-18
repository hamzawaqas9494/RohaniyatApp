import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function IdaraRohaniyatScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>ادرا روحانیت</Text>
          <Text style={styles.description}>
            ادارہ روحانیات ایک ایسا مرکز ہے جہاں روحانی علوم کی تعلیم دی جاتی
            ہے۔ یہاں پر مختلف عملیات، دعائیں اور قرآنی علوم کے ذریعے لوگوں کی
            رہنمائی کی جاتی ہے۔ اس کا مقصد روحانی سکون اور دینی رہنمائی فراہم
            کرنا ہے۔
          </Text>
        </View>
      </ScrollView>
    </CustomBackground>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
