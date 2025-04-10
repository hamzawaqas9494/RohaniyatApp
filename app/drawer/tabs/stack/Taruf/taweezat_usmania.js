import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function TaweezatUsmaniaScreen() {
  return (
    <CustomBackground>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
