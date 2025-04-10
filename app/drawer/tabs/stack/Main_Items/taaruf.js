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
  { id: "2", screen: "udra_rohaniyat", text: "ادرا روحانیت" },
  { id: "3", screen: "taweezat_usmania", text: "تعویذات عثمانیہ" },
  { id: "4", screen: "rohani_ishaya", text: "روحانی عشایہ" },
  { id: "5", screen: "rohani_ilaj", text: "روحانی علاج" },
  { id: "6", screen: "amliyat_course", text: "عملیات کورس" },
];

export default function TitleScreen() {
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
              onPress={() => navigation.navigate(`Taruf/${item.screen}`)}
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
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  card: {
    width: 300,
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
    writingDirection: "rtl",
  },
});
