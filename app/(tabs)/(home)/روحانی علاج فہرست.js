import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBackground from "../../../components/Background/Background";

const DATA = [
  {
    id: "1",
    screen: "روحانی علاج کا تعارف",
    text: "روحانی علاج کا مختصر تعارف",
  },
  {
    id: "2",
    screen: "نظر بد کی علامات",
    text: "جادو، جنات اور نظر بد کی علامات",
  },
  {
    id: "3",
    screen: "روحانی تشخیص طریقہ ",
    text: "روحانی تشخیص",
  },
  {
    id: "4",
    screen: "جادو،جنات",
    text: "جادو، جنات اور مسائل کا علاج",
  },
  {
    id: "5",
    screen: "حصاراعمال",
    text: "حصار (حفاظت) کے اعمال",
  },
  {
    id: "6",
    screen: "ہمارا طریقہ علاج",
    text: "ہمارا طریقہ علاج",
  },
];
export default function RohaniIlaj() {
  const navigation = useNavigation();
  return (
    <CustomBackground>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </CustomBackground>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
