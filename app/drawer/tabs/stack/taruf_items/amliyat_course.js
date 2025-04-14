import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function AmliyatCourseScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>عملیات کورس</Text>
          <Text style={styles.description}>
            عملیات کورس میں روحانی علوم اور عملیات کے اصول سکھائے جاتے ہیں تاکہ
            لوگ قرآنی اور اسلامی طریقے سے اپنی زندگی بہتر بنا سکیں۔
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
