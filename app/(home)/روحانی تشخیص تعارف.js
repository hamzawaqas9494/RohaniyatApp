import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomBackground from "../../components/Background/Background";
export default function RohaniIshayatashkhesTaruf() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}> روحانی تشخیص.... </Text>
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
    fontSize: 28,
    paddingTop:4,
    paddingRight:6,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "right",
    writingDirection: "rtl",
  },
  description: {
    fontSize: 20,
    paddingRight:4,
    lineHeight:30,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    textAlign: "right",
    writingDirection: "rtl",
  },
});
