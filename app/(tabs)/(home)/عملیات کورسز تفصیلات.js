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
import CustomBackground from "../../../components/Background/Background";

const DATA = [
  {
    id: "1",
    screen: "عملیات تعارف",
    text: "عملیات کا تعارف",
  },
  {
    id: "2",
    screen: "عامل کی شرائط",
    text: "عامل کے لیے شرائط",
  },

  {
    id: "3",
    screen: "علاج کورس",
    text: "مریضوں کے لیے علاج کورس",
  },
  {
    id: "4",
    screen: "چلہ کشی",
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
                navigation.navigate(item.screen)
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
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 2,
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
    writingDirection: "rtl",
  },
});
