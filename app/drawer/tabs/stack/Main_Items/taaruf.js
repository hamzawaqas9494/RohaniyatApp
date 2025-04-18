import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBackground from "../../../../../components/Background/Background";

const DATA = [
  { id: "1", screen: "sirprast", text: "سرپرست" },
  { id: "2", screen: "idara_rohaniyat", text: "ادارہ روحانیات" },
  { id: "3", screen: "taweezat_usmania", text: "تعویذات عثمانیہ" },
  { id: "4", screen: "rohani_ishaya", text: "روحانی اشیاء" },
  { id: "5", screen: "rohani_ilaj", text: "روحانی علاج" },
  { id: "6", screen: "amliyat_course", text: "عملیات کورس" },
  { id: "7", screen: "madrassa_taleem_ul_quran", text: "مدرسہ تعلیم القرآن" },
];

export default function Taaruf() {
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
              onPress={() => navigation.navigate(`taruf_items/${item.screen}`)}
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
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
  },
});
