import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function AdraRohaniyatScreen() {
  return (
    <CustomBackground>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "right",
    marginBottom: 10,
  },

  description: {
    fontSize: 22,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
