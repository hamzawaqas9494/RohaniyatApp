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
  { id: "1", screen: "مرید فارم", text: "مرید ہونے کیلئے" },
  { id: "2", screen: "روحانی علاج فارم", text: "روحانی علاج کے لیے" },
  { id: "3", screen: "روحانی تشخیص فارم", text: "روحانی تشخیص کے لیے" },
  { id: "4", screen: "استخارہ فارم", text: "استخارہ کے لیے" },
  { id: "5", screen: "عطیات فارم", text: "عطیات کے لیے" },
  { id: "6", screen: "عملیات کورس فارم", text: "عملیات کورس کے لیے" },
];
export default function Khidmat() {
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
 card: {
    width: "100%",
    backgroundColor: "#E4DAC1",
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 22,
    paddingTop:4,
    fontFamily: "Jameel-Noori-Regular",
    color: "#6C472D",
    textAlign: "center",
  },
});
