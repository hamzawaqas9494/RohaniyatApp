import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomBackground from "../../../components/Background/Background";
import { mainStyles } from "../../../style/globalcss";
const DATA = [
  { id: "1", screen: "سرپرست تعارف", text: "سرپرست" },
  { id: "2", screen: "ادارہ روحانیات تعارف", text: "ادارہ روحانیات" },
  { id: "3", screen: "تعویذات عثمانیہ تعارف", text: "تعویذات عثمانیہ" },
  { id: "4", screen: "روحانی اشیاء تعارف", text: "روحانی اشیاء" },
  { id: "5", screen: "روحانی علاج تعارف", text: "روحانی علاج" },
  { id: "6", screen: "عملیات کورس", text: "عملیات کورس" },
  { id: "7", screen: "مدرسہ تعلیم القرآن تعارف", text: "مدرسہ تعلیم القرآن" },
];
export default function Taaruf() {
  const navigation = useNavigation();
  return (
    <CustomBackground>
      <View style={mainStyles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
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
