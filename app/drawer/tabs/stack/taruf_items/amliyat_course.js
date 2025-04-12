import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function AmliyatCourseScreen() {
  return (
    <CustomBackground>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
