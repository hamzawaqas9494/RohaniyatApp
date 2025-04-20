import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function HisarAmaalScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>حصار</Text>
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
    fontSize: 25,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
