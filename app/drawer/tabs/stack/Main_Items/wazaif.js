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
    screen: "wazaif_content",
    text: "وظائف",
  },
  {
    id: "2",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "tawaiz_content",
    text: " تعویذات",
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
              onPress={() => navigation.navigate(`wazaif_items/${item.screen}`)}
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
  // container: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // list: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexGrow: 1,
  // },
  card: {
    flexGrow: 1,
    width: "100%", // full width
    backgroundColor: "#E4DAC1",
    paddingVertical: 15,
    paddingHorizontal: 20, // horizontal padding for text inside
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
