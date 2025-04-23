import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomBackground from "../../../components/Background/Background";

import HTMLView from "react-native-htmlview";
export default function RohaniIlahTaraafScreen() {
  return (
    <CustomBackground>
      <ScrollView>
        <View>

        <Text style={styles.heading}>روحانی علاج کا مختصر تعارف </Text>
     

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
const htmlStyles = StyleSheet.create({
  h1: {
    fontFamily: "Arial",
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h2: {
    fontFamily: "Arial",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    writingDirection: "rtl",
    textAlign: "right",
  },
  h3: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    writingDirection: "rtl",
    textAlign: "right",
  },
  p: {
    marginTop: 10,
    fontSize: 16,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  span: {
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 30,
    textAlign: "right",
    writingDirection: "rtl",
  },
  // ul: {
  //   fontSize: 16,
  //   color: "#6C472D",
  //   lineHeight: 20,
  //   textAlign: "right",
  //   writingDirection: "rtl",
  // },
  ol: {
    fontSize: 16,
    color: "#6C472D",
    lineHeight: 20,
    textAlign: "right",
    writingDirection: "rtl",
  },
  ul: {
  fontSize: 16,
  color: "#6C472D",
  lineHeight: 28,
  textAlign: "right",
  writingDirection: "rtl",
  paddingRight: 0,
  marginRight: 0,
  paddingLeft: 0,  // prevent space in LTR too
  marginLeft: 0,
},

li: {
  fontSize: 16,
  color: "#6C472D",
  fontFamily: "Jameel-Noori-Regular",
  lineHeight: 28,
  textAlign: "right",
  writingDirection: "rtl",
  paddingRight: 0,
  marginRight: 0,
  paddingLeft: 0,
  marginLeft: 0,
},
  strong: {
    fontWeight: "bold",
    color: "red",
  },
  em: {
    fontStyle: "italic",
  },
});