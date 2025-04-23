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
  { id: "1", screen: "mareedForm", text: "مرید ہونے کیلئے" },
  { id: "2", screen: "rohaniIlajForm", text: "روحانی علاج کے لیے" },
  { id: "3", screen: "rohani_taskas", text: "روحانی تسکاس کے لیے" },
  { id: "4", screen: "istakhara", text: "استخارہ کے لیے" },
  { id: "5", screen: "atiyar", text: "عطیات کے لیے" },
  { id: "6", screen: "amliyat_course", text: "عملیات کورس کے لیے" },
];

export default function FreeIstikhara() {
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
                navigation.navigate(`free_istikhara/${item.screen}`)
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
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
