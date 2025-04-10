import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../../../components/Background/Background";

export default function RohaniIshayaScreen() {
  return (
    <CustomBackground>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.heading}>روحانی عشایہ</Text>
          <Text style={styles.description}>
            روحانی عشایہ ایک خاص روحانی اجتماع ہے جہاں ذکر، درود، اور دعائیں کی
            جاتی ہیں تاکہ روحانی برکت حاصل ہو۔
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
