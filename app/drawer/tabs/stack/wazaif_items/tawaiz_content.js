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
    icon: require("../../../../../assets/images/wazafIcon.png"),
    screen: "nakosh_mazaj_tarika",
    text: " نقوش کا مزاج اور طریقہ",
  },
  {
    id: "2",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "nakosh_lawazmat",
    text: "نقوش کے لوازمات",
  },
  {
    id: "3",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "mujrab_nakosh",
    text: "مجرب نقوش",
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
                navigation.navigate(`wazaif_items/tawaiz_items/${item.screen}`)
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
    paddingHorizontal: 20,
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
