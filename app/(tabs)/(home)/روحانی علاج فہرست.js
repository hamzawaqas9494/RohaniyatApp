import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";

const DATA = [
  {
    id: "1",
    screen:"ہمارا روحانی علاج کا طریقہ",
    text: "ہمارا روحانی علاج کا طریقہ",
  },
  {
    id: "2",
    screen:"مریض کے لیے روحانی علاج",
    text: "سائل/مریض کے لیے روحانی علاج",
  }
  
];
export default function RohaniIlaj() {
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
              onPress={() => navigation.navigate(item.screen)}
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
    paddingVertical: 2,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    lineHeight:60,
    textAlign: "center",
  },
});
