import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBackground from "../../../../../components/Background/Background";

const DATA = [
  {
    id: "1",
    screen: "rohani_tashkhess_tararuf",
    text: "روحانی تشخیص کا تعارف",
  },
  {
    id: "2",
    screen: "fard_ki_tashkhess",
    text: "فرد کی تشخیص کرنے کا طریقہ",
  },

  {
    id: "3",
    screen: "jaga_ki_tashkhess",
    text: " جگہ کی تشخیص کرنے کا طریقہ",
  },
];

export default function RohaniTashkhees() {
  const navigation = useNavigation();

  return (
    <CustomBackground>
      <View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate(
                  `rohani_ilaj/rohani_tashkhees_items/${item.screen}`
                )
              }
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
    fontFamily: "NotoNastaliqUrdu-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
