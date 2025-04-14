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
    screen: "rohani_ilaaj_taaruf",
    text: "روحانی علاج کا مختصر تعارف",
  },
  {
    id: "2",
    icon: require("../../../../../assets/images/wazafIcon.png"),
    screen: "jadu_jinnat",
    text: "جادو، جنات اور نظر بد کی علامات",
  },

  {
    id: "3",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "rohani_tashkhees",
    text: "روحانی تشخیص",
  },
  {
    id: "4",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "jadu_jinnat_ilaaj",
    text: "جادو، جنات اور مسائل کا علاج",
  },
  {
    id: "5",
    icon: require("../../../../../assets/images/wazafIcon.png"),
    screen: "hisaar_amaal",
    text: "حصار (حفاظت) کے اعمال",
  },

  {
    id: "6",
    icon: require("../../../../../assets/images/tawizatusmaniyaIcon.png"),
    screen: "hamara_laaj",
    text: "ہمارا طریقہ علاج",
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
              onPress={() => navigation.navigate(`rohani_ilaj/${item.screen}`)}
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
