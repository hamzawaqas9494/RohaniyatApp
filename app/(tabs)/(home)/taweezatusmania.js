import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../components/Background/Background";


export default function TaweezatUsmaniaScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
          <Text style={styles.heading}>تعویذات عثمانیہ</Text>
          <Text style={styles.description}>
            تعویذات عثمانیہ ایک اسلامی روحانی طریقہ ہے جو زندگی کے مختلف مسائل
            کے حل کے لیے استعمال ہوتا ہے۔
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
