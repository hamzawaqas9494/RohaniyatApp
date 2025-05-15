import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
const DATA = [
  {
    id: "1",
    screen: "روحانی تشخیص تعارف",
    text: "روحانی تشخیص کا تعارف",
  },
  {
    id: "2",
    screen: "فرد کی تشخیص",
    text: "فرد کی تشخیص کرنے کا طریقہ",
  },
  {
    id: "3",
    screen: "جگہ کی تشخیص",
    text: " جگہ کی تشخیص کرنے کا طریقہ",
  },
];
export default function RohaniTashkheesTrika() {
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
    width: "100%",
    backgroundColor: "#E4DAC1",
    paddingVertical: 6,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 22,
   fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
    centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataText: {
    fontSize: 18,
    color: "#6C472D",
    fontFamily: "Jameel-Noori-Regular",
    fontWeight: "600",
    textAlign: "center",
  },
});
