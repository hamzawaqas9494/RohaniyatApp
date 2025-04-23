import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../components/Background/Background";


export default function RohaniTashkhessScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>
        <Text style={styles.heading}>rohani tashkhees </Text>          
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
