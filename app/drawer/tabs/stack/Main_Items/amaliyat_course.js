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
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "amliyat_taruf",
    text: "عملیات کا تعارف",
  },
  {
    id: "2",
    icon: require("../../../../../assets/images/wazafIcon.png"),
    screen: "aamil_ki_sharait",
    text: "عامل کے لیے شرائط",
  },

  {
    id: "3",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "marizon_ke_ilaj",
    text: "مریضوں کے لیے علاج کورس",
  },
  {
    id: "4",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "amliyat_chilla_kashi",
    text: "عملیات اور چلہ کشی",
  },
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
              onPress={() =>
                navigation.navigate(`amaliyat_course_items/${item.screen}`)
              }
            >
              <Image source={item.icon} style={{ width: 30, height: 30 }} />
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
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6C472D",
    textAlign: "center",
    writingDirection: "rtl",
  },
});
