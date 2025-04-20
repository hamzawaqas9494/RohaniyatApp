import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../../components/Background/Background";

export default function NakoshLawazmat() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>نقوش کے لوازمات</Text>
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
    lineHeight:50,
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#6C472D",
    fontFamily: "NotoNastaliqUrdu-Regular",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
});
